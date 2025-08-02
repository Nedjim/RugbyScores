import { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import IconButton from "@mui/material/IconButton";
import styles from "./index.module.scss";

const DateTitle = (props: {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
}) => {
  const { title, onPrevious, onNext } = props;

  return (
    <div className={styles.title}>
      <IconButton color="inherit" onClick={onPrevious} size="small">
        <FontAwesomeIcon icon={faAngleLeft} />
      </IconButton>
      <h3>{title}</h3>
      <IconButton color="inherit" onClick={onNext} size="small">
        <FontAwesomeIcon icon={faAngleRight} />
      </IconButton>
    </div>
  );
};
export default memo(DateTitle);
