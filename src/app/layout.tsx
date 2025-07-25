import "normalize.css/normalize.css";
import dynamic from "next/dynamic";
import { memo, Suspense } from "react";
import { roboto } from "@/utils";
import Header from "@/container/Header";
import Aside from "@/container/Aside";
import Providers from "./provider";
import styles from "./index.module.scss";

const Loading = dynamic(() => import("./loading"));

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className={styles.layout}>
          <Header />
          <Providers>
            <main className={`${styles.main} ${roboto.className}`}>
              <Aside />
              <Suspense fallback={<Loading />}>
                <div className={styles.children}>{children}</div>
              </Suspense>
            </main>
          </Providers>
        </div>
      </body>
    </html>
  );
}

export default memo(RootLayout);
