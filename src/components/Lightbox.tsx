"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: React.ReactNode;
};

/** Envuelve una miniatura y permite ampliarla en un pop-up al hacer click. */
export default function Lightbox({ src, alt, width, height, children }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar foto: ${alt}`}
        className="group relative block w-full text-left cursor-zoom-in"
      >
        {children}
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-concrete-dark/70 text-bone opacity-80 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            <path d="M11 8v6M8 11h6" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setOpen(false)}
          >
            <span id={titleId} className="sr-only">
              {alt}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center w-11 h-11 bg-bone text-concrete-dark hover:bg-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="92vw"
              onClick={(e) => e.stopPropagation()}
              className="w-auto h-auto max-w-[92vw] max-h-[86vh] object-contain [filter:grayscale(1)]"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
