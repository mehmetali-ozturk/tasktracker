import type { Metadata } from "next";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackgroun";

export const metadata: Metadata = {
  title: "TaskTracker Pro",
  description: "Organize anything, together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="smooth-scroll">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}