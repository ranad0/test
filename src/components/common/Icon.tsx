const iconPaths: Record<string, React.ReactNode> = {
  steering: <path d="M4 13a8 8 0 1 1 16 0M4 13h16M12 13v7M8 13l-3 4M16 13l3 4" />,
  chauffeur: <path d="M8 7a4 4 0 0 1 8 0M5 21a7 7 0 0 1 14 0M7 8h10M9 4h6" />,
  plane: <path d="M2 16l20-8-20-8 5 8-5 8Zm5-8h8" />,
  ribbon: <path d="M8 3h8l2 5-6 13L6 8l2-5Zm-2 5h12M9 3l3 18 3-18" />,
  briefcase: <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 7h16v12H4zM4 12h16" />,
  calendar: <path d="M7 2v4M17 2v4M4 8h16M5 5h14v16H5z" />,
  pin: <path d="M12 21s7-5.3 7-12a7 7 0 1 0-14 0c0 6.7 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  spark: <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" />,
  shield: <path d="M12 2l8 4v6c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V6l8-4Z" />,
  whatsapp: <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.8ZM8.7 7.6c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.5.1.2 1.7 2.8 4.3 3.8 2.1.8 2.6.6 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5L9.3 8c-.2-.3-.3-.4-.6-.4Z" />,
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  car: <path d="M3 14l2-6a3 3 0 0 1 3-2h8a3 3 0 0 1 3 2l2 6M5 14h14v5H5zM7 19v2M17 19v2M7 14l1-3h8l1 3M7.5 17h.01M16.5 17h.01" />,
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.4 19.4 0 0 1 5.2 13 19.8 19.8 0 0 1 2.1 4.3 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
};

type IconProps = {
  name: string;
  className?: string;
  decorative?: boolean;
};

export function Icon({ name, className = 'h-5 w-5', decorative = true }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={decorative}
      className={className}
    >
      {iconPaths[name] || iconPaths.spark}
    </svg>
  );
}
