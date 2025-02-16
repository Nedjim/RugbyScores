"use client";
import { memo, useContext } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import AppContext from "@/pages/context";

import styles from "./index.module.scss";

const DATE_FORMAT = "DD/MM/YYYY";

const SeasonCalendar = () => {
  const { date, setDate, resetFilters } = useContext(AppContext);

  return (
    <div className={styles.calendarWrapper}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className={styles.datePicker}
          format={DATE_FORMAT}
          value={date}
          onChange={(value) => {
            if (value) {
              setDate(value);
              resetFilters();
            }
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default memo(SeasonCalendar);
