type P = { size?: number };
export function InstagramIcon({ size = 20 }: P) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" /></svg>);
}
export function WhatsAppIcon({ size = 20 }: P) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l1.65-4.8A8.5 8.5 0 1 1 8 19.4L3 21z" /><path d="M9 8.5c.3 2.4 2.6 4.7 5 5l1.2-1.2-1.8-1-.8.7c-.9-.4-1.6-1.1-2-2l.7-.8-1-1.8L9 8.5z" /></svg>);
}
