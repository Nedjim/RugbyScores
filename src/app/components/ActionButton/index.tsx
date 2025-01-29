import { memo } from "react";
import styles from "./index.module.scss";

type ActionButtonType = {
  type: string;
  onClick: () => void;
  disabled?: boolean;
};

const ActionButton = (props: ActionButtonType) => {
  const { type, onClick, disabled } = props;

  return (
    <button onClick={onClick} className={styles.actionbutton}>
      {disabled && "hide"} {type}
    </button>
  );
};

export default memo(ActionButton);
