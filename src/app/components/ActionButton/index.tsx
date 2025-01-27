import { memo } from "react";
import styles from "./index.module.scss";

type ActionButtonType = {
  disabled: boolean;
  type: string;
  onClick: () => void;
};

const ActionButton = (props: ActionButtonType) => {
  const { type, onClick, disabled } = props;

  return (
    <button onClick={onClick} className={styles.actionbutton}>
      {disabled ? "hide" : "show"} {type}
    </button>
  );
};

export default memo(ActionButton);
