import { memo } from "react";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Rugby Scores</h1>
        <span className={styles.description}>
          You will never get spoiled again...
        </span>
      </div>
      <div className={styles.menu}>
        <div className={styles.item}>Home</div>
        <div className={styles.item}>About us</div>
        <div className={styles.item}>Contact</div>
      </div>
    </header>
  );
};

export default memo(Header);
