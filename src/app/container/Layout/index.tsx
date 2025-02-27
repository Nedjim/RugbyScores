import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import styles from "./index.module.scss";

export const metadata: Metadata = {
  title: "Rugby Scores",
  description: "Scores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
