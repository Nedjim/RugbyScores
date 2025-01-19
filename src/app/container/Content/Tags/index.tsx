import { memo } from "react";
import styles from "./index.module.scss";
import { Chip } from "@mui/material";

const Tags = () => {
  return (
    <div className={styles.tags}>
      <Chip label="All" />
      <Chip label="Finish" variant="outlined"/>
      <Chip label="In progress" variant="outlined"/>
      <Chip label="Not started" variant="outlined"/>
    </div>
  );
};

export default memo(Tags);
