const DEFAULT_WHATSAPP_NUMBER = "+62 895-3491-46296";

// `||` (not `??`) so an empty value in .env also falls back to the default.
export const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;

/** wa.me wants digits only, with the country code and no leading 0 or +. */
function toWaNumber(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

/** WhatsApp chat link, optionally with a pre-filled message so parents don't face a blank chat. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${toWaNumber(whatsappNumber)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
