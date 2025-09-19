// src/app/components/footer/SocialIcon.js
export default function SocialIcon({ href, color, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:scale-110 transition-transform"
      style={{ color }}
    >
      {icon}
    </a>
  );
}
