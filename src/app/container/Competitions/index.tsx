import { memo } from "react";
import { useCompetitions } from "@/app/libs/hooks";
import dayjs from "dayjs";
import styles from "./index.module.scss";

const Competitions = () => {
  const { data } = useCompetitions();
  const season = dayjs(new Date()).year();

  if (!data) {
    return null;
  }

  const currentCompetitions = data.filter((c) => c.season === season);

  return (
    <div className={styles.competitions}>
      <h4 className={styles.title}>List of the current rugby competitions</h4>
      <div className={styles.list}>
        {currentCompetitions.map((c, key) => {
          return (
            <div key={key} className={styles.item}>
              {c.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Competitions);
