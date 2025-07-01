"use client";
import clsx from "clsx";
import { memo } from "react";
import { smooch } from "@/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./index.module.scss";

const Header = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

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
          href="/matches-day"
          className={clsx(isActive("/matches-day") && styles.active)}
        >
          Matches day
        </Link>
        <Link
          href="/competitions"
          className={clsx(isActive("/competitions") && styles.active)}
        >
          Competitions
        </Link>
        <Link
          href="/about-me"
          className={clsx(isActive("/about-me") && styles.active)}
        >
          About me
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
