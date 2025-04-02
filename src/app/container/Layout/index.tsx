import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../Header";
import { roboto } from "@/app/utils";
import styles from "./index.module.scss";

export const metadata: Metadata = {
  title: "Rugby Scores",
  description: "Scores",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.main} ${roboto.className}`}>{children}</main>
      <SpeedInsights />
    </div>
  );
}
