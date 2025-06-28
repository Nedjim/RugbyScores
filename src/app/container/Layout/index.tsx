import { memo } from "react";
import { roboto } from "@/app/utils";
import Header from "../Header";
import Aside from "../Aside";
import styles from "./index.module.scss";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.main} ${roboto.className}`}>
        <Aside />
        <div className={styles.children}>{children}</div>
      </main>
    </div>
  );
}

export default memo(Layout);
