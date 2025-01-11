import SeasonCalendar from "@/app/components/SeasonCalendar";
import { memo } from "react";
import styles from "./index.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <SeasonCalendar />
    </aside>
  );
};

export default memo(Aside);
