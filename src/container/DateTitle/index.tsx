"use client";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import ChevronButton from "../../components/ChevronButton";
import dynamic from "next/dynamic";
import styles from "./index.module.scss";

const CalendarButton = dynamic(() => import("@/components/CalendarButton"), {
  ssr: false,
});

const DateTitle = (props: {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
  datePickerConfig: DatePickerProps;
}) => {
  const { title, onPrevious, onNext, datePickerConfig } = props;

  return (
    <div className={styles.title}>
      <ChevronButton direction="left" onClick={onPrevious} />
      <h3>
        <span>{title}</span>
        <CalendarButton config={datePickerConfig} />
      </h3>
      <ChevronButton direction="right" onClick={onNext} />
    </div>
  );
};
export default DateTitle;
