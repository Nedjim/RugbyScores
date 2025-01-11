
import styles from './index.module.scss';

type ScoreButtonType = {
  disabled: boolean;
  label: string;
  onClick: () => void;
};

export const ScoreButton = (props: ScoreButtonType) => {
  const { label, onClick } = props;

  return (
    <button onClick={onClick} className={styles.scoreButton}>
      {label}
    </button>
  );
};
