/** Iconos SVG usados en el sitio, extraídos del HTML de referencia. */

type IconProps = { size?: number; className?: string; fill?: string };

export function WhatsAppIcon({ size = 17, className, fill = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M.06 24l1.68-6.15A11.87 11.87 0 010 11.9C0 5.33 5.35 0 11.92 0a11.82 11.82 0 018.42 3.49 11.82 11.82 0 013.48 8.42c0 6.57-5.35 11.9-11.92 11.9a11.9 11.9 0 01-5.7-1.45L.06 24zM6.6 20.2l.36.22a9.87 9.87 0 004.96 1.36c5.46 0 9.9-4.43 9.9-9.88a9.83 9.83 0 00-2.9-6.99 9.82 9.82 0 00-6.99-2.9c-5.46 0-9.9 4.43-9.9 9.88 0 1.88.53 3.71 1.53 5.29l.24.38-1 3.63 3.84-.99zm11.65-5.53c-.07-.12-.26-.2-.55-.34-.29-.15-1.7-.84-1.96-.94-.26-.09-.46-.14-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.14-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.57-.89-2.15-.24-.56-.47-.48-.65-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36z" />
    </svg>
  );
}

export function PinIcon({ size = 16, className, fill = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5.3 6.6 11.7 6.9 12 .3.3.8.3 1.1 0 .3-.3 7-6.7 7-12C19.5 5.4 16.1 2 12 2zm0 10.5a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}
