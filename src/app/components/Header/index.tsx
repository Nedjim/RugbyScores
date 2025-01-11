import { memo } from "react";
import styles from './index.module.scss';

const Header = () => {
  return <header className={styles.header}>
    <h3 className={styles.title}>Rugby App</h3>
    <span className={styles.description}>You will never again be spoiled...</span>
  </header>
}

export default memo(Header)