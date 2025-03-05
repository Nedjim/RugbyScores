import { memo } from "react";
import { Referee } from "@/app/libs/types";
import styles from "../index.module.scss";

const Referees = (props: { referees: Referee[] }) => {
  const { referees } = props;

  return (
    <div className={styles.content}>
      <div className={styles.title}>Referres</div>
      {referees.map((referee, key) => {
        const { name, role } = referee;

        return (
          <div key={key} className={styles.line}>
            {name} ({role})
          </div>
        );
      })}
    </div>
  );
};

export default memo(Referees);
