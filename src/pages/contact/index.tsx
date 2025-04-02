import { memo } from "react";
import styles from "./index.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.title}>Contact me</h2>
    </div>
  );
};

export default memo(Contact);
