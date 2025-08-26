"use client";
import { ReactNode, Suspense } from "react";
/* 
CssBaseline applies MUI’s global CSS reset/normalization.
It must be used inside a client component that is a child of AppRouterCacheProvider (which is in layout.tsx).
Placing CssBaseline here ensures no hydration errors related to style injection occur.
*/
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/container/Header";
import Footer from "@/container/Footer";
import Provider from "./provider";
import Loading from "./loading";

import styles from "./index.module.scss";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      <div className={styles.layout}>
        <Header />
        <Provider>
          <main className={styles.main}>
            <Suspense fallback={<Loading />}>
              <div className={styles.children}>{children}</div>
            </Suspense>
          </main>
        </Provider>
        <Footer />
      </div>
    </>
  );
}
