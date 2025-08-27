"use client";
import { memo } from "react";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import Search from "@/components/Search";
import ChevronButton from "@/components/ChevronButton";
import CalendarButton from "@/components/CalendarButton";
import styles from "./index.module.scss";

const DateTitle = (props: {
  title: string;
  onPrevious: () => void;
  onNext: () => void;
  datePickerConfig: DatePickerProps;
  search: string;
  setSearch?: (key: string) => void;
}) => {
  const { title, onPrevious, onNext, datePickerConfig, search, setSearch } =
    props;

  return (
    <div className={styles.dateFilter}>
      {setSearch && <Search value={search} setValue={setSearch} />}
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
