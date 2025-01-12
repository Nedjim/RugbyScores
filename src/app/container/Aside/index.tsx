import SeasonCalendar from "@/app/components/SeasonCalendar";
import { memo } from "react";
import styles from "./index.module.scss";
import FilterInput from "@/app/components/FilterInput";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <FilterInput />
      <SeasonCalendar />
    </aside>
  );
};

export default memo(Aside);
