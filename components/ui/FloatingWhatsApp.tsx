"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

/**
 * Always-visible WhatsApp shortcut in the bottom-right corner. Shows a text
 * label from the small breakpoint up and collapses to an icon on phones.
 */
export function FloatingWhatsApp({ label, message }: { label: string; message: string }) {
  return (
    <motion.a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lift sm:px-5 sm:py-3.5"
    >
      <MessageCircle size={24} aria-hidden="true" />
      <span className="hidden text-sm font-bold sm:inline">{label}</span>
    </motion.a>
  );
}
