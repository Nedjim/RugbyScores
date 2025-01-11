import { memo } from "react";

import styles from "./index.module.scss";

const SeasonCalendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      Calendar
    </div>
  );
};

export default memo(SeasonCalendar);
