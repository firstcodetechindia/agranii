export type Photo = { src: string; alt: string; w: number; h: number; pos?: string };

/** Free Unsplash photos (see public/images/CREDITS.md). */
export const PHOTOS = {
  dev: { src: "/images/dev-monitors.jpg", alt: "Developer's hands typing at a multi-monitor workstation showing code", w: 1600, h: 900, pos: "70% 50%" },
  team: { src: "/images/team-meeting.jpg", alt: "Six colleagues collaborating around a conference table with laptops", w: 1600, h: 1066, pos: "50% 40%" },
  doctor: { src: "/images/doctor-xray.jpg", alt: "Doctor reviewing a medical scan on a tablet", w: 1600, h: 900, pos: "50% 50%" },
  jewellery: { src: "/images/jewel-a.jpg", alt: "Gold necklace and earring set on a velvet display stand", w: 1600, h: 1106, pos: "50% 30%" },
  hotel: { src: "/images/hotel-lobby.jpg", alt: "Hotel reception desk with marble front and brass trim", w: 1280, h: 1600, pos: "50% 60%" },
  hr: { src: "/images/hr-handshake.jpg", alt: "Two professionals shaking hands across a desk in a bright office", w: 1600, h: 900, pos: "70% 40%" },
  comms: { src: "/images/comms-b.jpg", alt: "Customer communication team wearing headsets at their desks", w: 1600, h: 1067, pos: "70% 40%" },
} satisfies Record<string, Photo>;
export type PhotoKey = keyof typeof PHOTOS;
