import { memo, useContext } from "react";
import SeasonCalendar from "@/components/SeasonCalendar";
import FilterInput from "@/components/FilterInput";
import { AppContext } from "@/pages/context";
import styles from "./index.module.scss";

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <CompetiitonFilter />
      <TeamFilter />
      <SeasonCalendar />
    </aside>
  );
};

function TeamFilter() {
  const { setTeamFilter } = useContext(AppContext);

  const handleChange = (value: string) => {
    if (value) {
      let timeout = undefined;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setTeamFilter(value);
      }, 1000);
    }
  };

  return <FilterInput label="Team" onChange={handleChange} />;
}

function CompetiitonFilter() {
  const { setCompetitionFilter } = useContext(AppContext);

  const handleChange = (value: string) => {
    if (value) {
      let timeout = undefined;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setCompetitionFilter(value);
      }, 1000);
    }
  };

  return <FilterInput label="Competition" onChange={handleChange} />;
}

export default memo(Aside);
