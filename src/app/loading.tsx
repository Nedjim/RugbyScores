import styles from "./index.module.scss";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.animation} />
    </div>
  );
};

export default Loading;
