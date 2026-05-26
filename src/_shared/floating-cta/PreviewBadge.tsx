"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5551981714117?text=" +
  encodeURIComponent("olá Yan, bora fechar este projeto!");

export default function PreviewBadge() {
  const [dismissed, setDismissed] = useState(false);
  const [hovered, setHovered] = useState(false);

  if (dismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[1100]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Prévia feita pela Upscalead — abrir WhatsApp"
        className="flex items-center justify-center sm:justify-start w-9 h-9 sm:w-auto sm:h-10 sm:gap-2.5 sm:pl-3 sm:pr-4 rounded-full bg-white/85 backdrop-blur-md border border-[var(--border-subtle)] shadow-lg shadow-black/5 hover:shadow-xl hover:bg-white transition-all"
      >
        <span className="flex w-6 h-6 rounded-full bg-[#25D366]/12 text-[#25D366] items-center justify-center shrink-0">
          <IconBrandWhatsapp className="size-3.5" />
        </span>
        <span className="hidden sm:flex flex-col leading-tight text-left">
          <span className="font-mono uppercase text-[9px] tracking-[0.18em] text-[var(--foreground-mute)]">
            Prévia
          </span>
          <span className="text-[11.5px] font-medium text-[var(--foreground)] whitespace-nowrap">
            Feito pela{" "}
            <span className="text-[var(--accent)]">Upscalead</span>
          </span>
        </span>

        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
              animate={{ opacity: 1, width: "auto", marginLeft: 4 }}
              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block overflow-hidden text-[11px] text-[var(--foreground-soft)] whitespace-nowrap"
            >
              · fale com a gente
            </motion.span>
          )}
        </AnimatePresence>
      </a>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setDismissed(true);
        }}
        aria-label="Dispensar"
        className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[var(--foreground)] text-white transition-opacity flex items-center justify-center shadow ${hovered ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <X className="size-2.5" strokeWidth={2.5} />
      </button>
    </motion.div>
  );
}
