import "normalize.css/normalize.css";
import { memo, Suspense } from "react";
import { roboto } from "@/utils";
import Header from "@/container/Header";
import Aside from "@/container/Aside";
import Providers from "./provider";
import styles from "./index.module.scss";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.layout}>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Providers>
              <main className={`${styles.main} ${roboto.className}`}>
                <Aside />
                <div className={styles.children}>{children}</div>
              </main>
            </Providers>
          </Suspense>
        </div>
      </body>
    </html>
  );
}

export default memo(RootLayout);
