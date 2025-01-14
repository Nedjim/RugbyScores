
import styles from './index.module.scss';

type ActionButtonType = {
  disabled: boolean;
  label: string;
  onClick: () => void;
};

export const ActionButton = (props: ActionButtonType) => {
  const { label, onClick } = props;

  return (
    <button onClick={onClick} className={styles.actionbutton}>
      {label}
    </button>
  );
};
