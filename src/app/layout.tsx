import type { Metadata } from "next";
import "./globals.css";
import DesignSwitcher from "@/components/DesignSwitcher";

export const metadata: Metadata = {
  title: "Bird Fireplaces | Premium Hearth Solutions",
  description: "Experience the warmth and elegance of Bird Fireplaces. Crafted with luxury and modern design for the ultimate home comfort.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <DesignSwitcher />
      </body>
    </html>
  );
}
