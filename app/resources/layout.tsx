import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Access academic, professional, and SHPE-related resources including scholarships, career tools, online courses, and more.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
