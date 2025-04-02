import clsx from "clsx";
import { memo } from "react";
import { smooch } from "@/app/utils";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <header className={clsx(styles.header, smooch.className)}>
      <div className={styles.left}>
        <h1 className={styles.title}>Rugby Scores</h1>
        <span className={styles.description}>
          You will never get spoiled again...
        </span>
      </div>
      <div className={styles.menu}>
        <Link
          href="/competitions"
          className={clsx(isActive("/competitions") && styles.active)}
        >
          Competitions
        </Link>
        <Link href="/about-me" className={clsx(isActive("") && styles.active)}>
          About me
        </Link>
        <Link
          href="/contact"
          className={clsx(isActive("/contact") && styles.active)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
