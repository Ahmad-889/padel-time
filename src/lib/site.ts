import type { Metadata } from "next";

export const businessInfo = {
  name: "Padel Next",
  legalName: "Padel Next Lahore",
  description:
    "Play on professional courts in DHA Phase 5 Lahore, book instantly, and join one of Lahore's fastest-growing sports communities.",
  city: "Lahore",
  area: "DHA Rahbar",
  address: "Dha Rahbar, Pine Ave, near university of lahore, Pine Avenue, Lahore, 53700",
  phoneDisplay: "+92 320 4674198",
  whatsappNumber: "923204674198",
  operatingHours: "Daily: 06:00 AM – 02:00 AM",
  mapsUrl: "https://www.google.com/maps/dir//padel%20next",
  instagramUrl:
    "https://www.instagram.com/padelnext.pk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  facebookUrl:
    "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17nAftRYZW%2F%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUBovaRdS6vPla0U8q15EBiGFKB_QK3tUtVrLD31CuFgw3MKubMsfScmcw8x_08QT549YMEvV-L2b8NmHuXx8xBaWUwRf1KLIMbf8Uzp8DjZ816YNe0BrrwOftcda9qJMHa68gw",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-ahmad-784271337/",
  bookingMessage: "Hello! I would like to inquire about booking a padel court.",
  communityMessage: "Hello! I would like to join the Padel Next community group.",
} as const;

export const createWhatsAppLink = (message: string) =>
  `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const siteMetadata: Metadata = {
  title: `${businessInfo.name} | Lahore's Premier Padel Experience`,
  description: businessInfo.description,
  keywords: [
    businessInfo.name,
    businessInfo.legalName,
    "Padel",
    "Lahore Sports",
    "DHA Phase 5 Padel",
    "Padel Court Lahore",
    "Book Padel Court",
  ],
};