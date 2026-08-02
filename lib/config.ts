export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "082112920756";

export const whatsappHref = `https://wa.me/${whatsappNumber.replace(/^0/, "62")}`;
