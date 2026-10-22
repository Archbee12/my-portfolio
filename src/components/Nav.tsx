"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={ `text-sm font-medium ${
            pathname === link.href
              ? "text-accent border-b-2 border-accent"
              : "text-white hover:text-accent"
          } transition-colors duration-300` }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
