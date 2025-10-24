"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Body scroll lock + focus management
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
      // Delay focus to allow animation to start
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.classList.remove("overflow-hidden");
      // Return focus to menu button when closed
      menuBtnRef.current?.focus();
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !mobileMenuRef.current) return;

      const focusableElements =
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
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
    const handler = (e: MediaQueryListEvent) =>
      e.matches && setIsMenuOpen(false);
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
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Image
                src="/PNG 2/SHPE_logo_horiz_University of Puerto Rico_CMYK.png"
                alt="SHPE UPRM Logo"
                width={200}
                height={60}
                priority
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      isActive
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuBtnRef}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-3 text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              onClick={handleOpen}
              aria-label="Open navigation menu"
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
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Full-screen Mobile Navigation (popup) */}
          {(isMenuOpen || isExiting) && (
            <div
              ref={mobileMenuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-0 z-[60] md:hidden"
            >
              {/* Backdrop */}
              <div
                className="menu-backdrop absolute inset-0 bg-black/40 backdrop-blur-[1px]"
                data-state={isExiting ? "closing" : "open"}
                onClick={handleClose}
                aria-hidden="true"
              />

              {/* Panel */}
              <div
                className="menu-panel relative h-full w-full bg-white"
                data-state={isExiting ? "closing" : "open"}
              >
                {/* Header inside panel */}
                <div className="flex items-center justify-between px-5 py-4 border-b">
                  <Link
                    href="/"
                    className="flex items-center space-x-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={handleClose}
                  >
                    <Image
                      src="/PNG 2/SHPE_logo_horiz_University of Puerto Rico_CMYK.png"
                      alt="SHPE UPRM Logo"
                      width={200}
                      height={60}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <button
                    ref={closeBtnRef}
                    className="inline-flex items-center justify-center rounded-lg p-3 text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                    onClick={handleClose}
                    aria-label="Close navigation menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Links */}
                <div className="px-6 pt-6 pb-32">
                  <nav
                    className="flex flex-col space-y-2"
                    aria-label="Mobile menu"
                  >
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={`py-3 px-4 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            isActive
                              ? "text-primary bg-primary/10 font-semibold"
                              : "text-gray-800 hover:text-primary hover:bg-gray-50"
                          }`}
                          onClick={handleClose}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>

                  {/* Optional CTA */}
                  <div className="mt-8 pt-6 border-t">
                    <a
                      href="https://shpe.org/membership/become-a-member/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="inline-flex w-full items-center justify-center rounded-xl border border-primary/20 bg-primary/90 px-6 py-4 text-white font-semibold hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:scale-[0.98]"
                    >
                      Join SHPE UPRM
                    </a>
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
                .menu-backdrop[data-state="open"] {
                  animation: fadeIn 250ms ease-out;
                }
                .menu-backdrop[data-state="closing"] {
                  animation: fadeOut 220ms ease-in forwards;
                }

                /* Panel */
                .menu-panel[data-state="open"] {
                  animation: slideUpIn 320ms cubic-bezier(0.22, 1, 0.36, 1); /* smooth ease-out */
                }
                .menu-panel[data-state="closing"] {
                  animation: slideDownOut 250ms cubic-bezier(0.55, 0, 0.45, 1)
                    forwards; /* smooth ease-in */
                }

                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
                @keyframes fadeOut {
                  from {
                    opacity: 1;
                  }
                  to {
                    opacity: 0;
                  }
                }

                @keyframes slideUpIn {
                  from {
                    transform: translateY(6%);
                    opacity: 0.9;
                  }
                  to {
                    transform: translateY(0%);
                    opacity: 1;
                  }
                }
                @keyframes slideDownOut {
                  from {
                    transform: translateY(0%);
                    opacity: 1;
                  }
                  to {
                    transform: translateY(4%);
                    opacity: 0;
                  }
                }
              `}</style>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
