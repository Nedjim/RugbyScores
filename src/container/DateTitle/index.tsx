"use client";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import styles from "./index.module.scss";
import ChevronButton from "@/components/ChevronButton";
import CalendarButton from "@/components/CalendarButton";
import { memo } from "react";

const DateTitle = (props: {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
  datePickerConfig: DatePickerProps;
}) => {
  const { title, onPrevious, onNext, datePickerConfig } = props;

  return (
    <div className={styles.content}>
      <ChevronButton direction="left" onClick={onPrevious} />
      <div className={styles.title}>
        <h3>{title}</h3>
        <CalendarButton config={datePickerConfig} />
      </div>
      <ChevronButton direction="right" onClick={onNext} />
    </div>
  );
};
export default memo(DateTitle);
