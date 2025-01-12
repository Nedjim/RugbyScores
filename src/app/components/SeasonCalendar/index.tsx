"use client";
import { memo, useContext } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import styles from "./index.module.scss";
import { DATE_FORMAT } from "@/app/helpers";
import { AppContext } from "@/app/context";

const SeasonCalendar = () => {
  const {date, setDate} = useContext(AppContext);

  return (
    <div className={styles.calendarWrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={styles.datePicker}
          format={DATE_FORMAT}
          value={date}
          onChange={(value) => setDate && value && setDate(value)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default memo(SeasonCalendar);
