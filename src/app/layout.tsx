import "normalize.css/normalize.css";
import { memo, Suspense } from "react";
import { roboto } from "@/utils";
import Header from "@/container/Header";
import Aside from "@/container/Aside";
import Loading from "@/components/Loading";
import Providers from "./provider";
import styles from "./index.module.scss";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.layout}>
          <Header />
          <Providers>
            <Suspense fallback={<Loading />}>
              <main className={`${styles.main} ${roboto.className}`}>
                <Aside />
                <div className={styles.children}>{children}</div>
              </main>
            </Suspense>
          </Providers>
        </div>
      </body>
    </html>
  );
}

export default memo(RootLayout);
