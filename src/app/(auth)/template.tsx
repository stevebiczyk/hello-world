"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
  { name: "Home", href: "/" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
        />
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            key={link.name}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
