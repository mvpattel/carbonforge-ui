import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@carbon/react/index.scss";
import "../../../packages/ui/src/styles/index.scss";

export const metadata: Metadata = {
  title: "CarbonForge UI Example",
  description: "Next.js example app for CarbonForge UI."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
