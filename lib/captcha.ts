import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

/**
 * Stateless math captcha. The server issues "a + b" with a signed, expiring token that contains the
 * answer's signature (never the answer). The same algorithm is implemented in contact.php for cPanel.
 * Token format: "<expiryUnix>.<nonce>.<hmacHex>" where hmac = HMAC_SHA256(secret, "<expiry>.<nonce>.<answer>").
 */
const TTL_SECONDS = 15 * 60;

function secret(): string {
  return process.env.CAPTCHA_SECRET || `agranii-captcha:${process.env.ENQUIRY_WEBHOOK_URL ?? "default"}`;
}
const sign = (payload: string) => createHmac("sha256", secret()).update(payload).digest("hex");

export function makeChallenge(): { question: string; token: string } {
  const pick = (n: number) => 1 + (randomBytes(1)[0] % n);
  let a = pick(9) + 1; // 2..10
  let b = pick(9);     // 1..9
  const op = randomBytes(1)[0] % 2 === 0 ? "+" : "−";
  if (op === "−" && b > a) [a, b] = [b, a];
  const answer = op === "+" ? a + b : a - b;
  const expiry = Math.floor(Date.now() / 1000) + TTL_SECONDS;
  const nonce = randomBytes(6).toString("hex");
  const token = `${expiry}.${nonce}.${sign(`${expiry}.${nonce}.${answer}`)}`;
  return { question: `What is ${a} ${op} ${b}?`, token };
}

/** `value` is "<token>~<answer>". */
export function verifyCaptcha(value: unknown): boolean {
  if (typeof value !== "string") return false;
  const i = value.lastIndexOf("~");
  if (i < 1) return false;
  const token = value.slice(0, i);
  const answer = value.slice(i + 1).trim();
  if (!/^-?\d{1,3}$/.test(answer)) return false;
  const [expiry, nonce, sig] = token.split(".");
  if (!expiry || !nonce || !sig || Number(expiry) < Math.floor(Date.now() / 1000)) return false;
  const expected = sign(`${expiry}.${nonce}.${Number(answer)}`);
  const a = Buffer.from(sig), b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
