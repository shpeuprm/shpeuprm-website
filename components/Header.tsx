"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  // Body scroll lock + focus
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      closeBtnRef.current?.focus();
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Auto-close when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => e.matches && setIsMenuOpen(false);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleOpen = () => {
    setIsExiting(false);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    // play exit animation, then unmount
    setIsExiting(true);
    window.setTimeout(() => {
      setIsMenuOpen(false);
      setIsExiting(false);
    }, 250); // keep in sync with CSS "slideDownOut" duration
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">SHPE UPRM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={handleOpen}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Full-screen Mobile Navigation (popup) */}
        {(isMenuOpen || isExiting) && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] md:hidden"
          >
            {/* Backdrop */}
            <div
              className={`menu-backdrop absolute inset-0 bg-black/40 backdrop-blur-[1px]`}
              data-state={isExiting ? "closing" : "open"}
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Panel */}
            <div
              className={`menu-panel relative h-full w-full bg-white`}
              data-state={isExiting ? "closing" : "open"}
            >
              {/* Header inside panel */}
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <Link href="/" className="flex items-center space-x-2" onClick={handleClose}>
                  <span className="text-2xl font-bold text-primary">SHPE UPRM</span>
                </Link>
                <button
                  ref={closeBtnRef}
                  className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  onClick={handleClose}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="px-6 pt-6">
                <nav className="flex flex-col space-y-4 text-lg">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2 font-medium text-gray-800 hover:text-primary transition-colors"
                      onClick={handleClose}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Optional CTA */}
                <div className="mt-auto fixed bottom-0 left-0 right-0 px-6 pb-8 pt-6 bg-gradient-to-t from-white via-white/95">
                  <Link
                    href="/join"
                    onClick={handleClose}
                    className="inline-flex w-full items-center justify-center rounded-xl border border-primary/20 bg-primary/90 px-4 py-3 text-white font-semibold hover:bg-primary transition-colors"
                  >
                    Join SHPE UPRM
                  </Link>
                </div>
              </div>
            </div>

            {/* Smooth animations */}
            <style jsx>{`
              /* Respect reduced motion */
              @media (prefers-reduced-motion: reduce) {
                .menu-backdrop,
                .menu-panel {
                  animation: none !important;
                }
              }

              /* Backdrop */
              .menu-backdrop[data-state='open'] {
                animation: fadeIn 250ms ease-out;
              }
              .menu-backdrop[data-state='closing'] {
                animation: fadeOut 220ms ease-in forwards;
              }

              /* Panel */
              .menu-panel[data-state='open'] {
                animation: slideUpIn 320ms cubic-bezier(0.22, 1, 0.36, 1); /* smooth ease-out */
              }
              .menu-panel[data-state='closing'] {
                animation: slideDownOut 250ms cubic-bezier(0.55, 0, 0.45, 1) forwards; /* smooth ease-in */
              }

              @keyframes fadeIn {
                from { opacity: 0; }
                to   { opacity: 1; }
              }
              @keyframes fadeOut {
                from { opacity: 1; }
                to   { opacity: 0; }
              }

              @keyframes slideUpIn {
                from { transform: translateY(6%); opacity: 0.9; }
                to   { transform: translateY(0%); opacity: 1; }
              }
              @keyframes slideDownOut {
                from { transform: translateY(0%); opacity: 1; }
                to   { transform: translateY(4%); opacity: 0; }
              }
            `}</style>
          </div>
        )}
      </nav>
    </header>
  );
}
