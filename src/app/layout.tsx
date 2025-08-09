import "normalize.css/normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import dynamic from "next/dynamic";
import { memo, Suspense } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import { roboto } from "@/utils";
import Header from "@/container/Header";
import Footer from "@/container/Footer";
import Providers from "./provider";
import styles from "./index.module.scss";
import EmotionProvider from "./emotion-provider";

/* 
Disable automatic CSS injection from FontAwesome to prevent style duplication
and potential hydration issues in SSR (Next.js). We manually import the styles instead.
*/
config.autoAddCss = false;

const Loading = dynamic(() => import("./loading"));

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={styles.body}>
        <div className={styles.layout}>
          <Header />
          <EmotionProvider>
            <Providers>
              <main className={`${styles.main} ${roboto.className}`}>
                <Suspense fallback={<Loading />}>
                  <div className={styles.children}>{children}</div>
                </Suspense>
              </main>
              <Footer />
            </Providers>
          </EmotionProvider>
        </div>
      </body>
    </html>
  );
}

export default memo(RootLayout);
