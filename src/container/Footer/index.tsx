import { memo } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { roboto } from "@/utils";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={clsx(styles.footer, roboto.className)}>
      <p>
        <span role="img" aria-label="rugby" className={styles.rugbyEmoticon}>
          🏉
        </span>
        <span>
          © {dayjs().year()} Nedjim DANIMON NGABA — Made with ❤️ using Next.js
        </span>
      </p>
      <p className={styles.networks}>
        <a
          href="https://www.linkedin.com/in/nedjimdn"
          target="_blank"
          aria-label="Linkedin"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Nedjim"
          target="_blank"
          aria-label="GitHub"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://x.com/nedjimdn"
          target="_blank"
          aria-label="X"
          rel="noopener noreferrer"
        >
          X
        </a>
        <a href="/about-me" aria-label="About me">
          About
        </a>
      </p>
    </footer>
  );
};

export default memo(Footer);
