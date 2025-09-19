// src/app/components/footer/FooterLink.js
import Link from "next/link";

export default function FooterLink({ href, children, target }) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");

  if (isExternal) {
    return (
      <li>
        <a
          href={href}
          target={target ?? "_blank"}
          rel="noopener noreferrer"
          className="hover:underline hover:text-white transition-colors"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        target={target}
        className="hover:underline hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
