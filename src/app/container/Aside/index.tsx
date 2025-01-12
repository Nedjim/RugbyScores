import SeasonCalendar from "@/app/components/SeasonCalendar";
import { memo, useContext } from "react";
import styles from "./index.module.scss";
import FilterInput from "@/app/components/FilterInput";
import { AppContext } from "@/app/context";

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

  const handleChange = (value: Event) => {
    if (setTeamFilter && value) {
      let timeout = null;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setTeamFilter(value.target.value);
      }, 1000);
    }
  };

  return <FilterInput label="Team" onChange={handleChange} />;
}

function CompetiitonFilter() {
  const { setCompetitionFilter } = useContext(AppContext);

  const handleChange = (value: Event) => {
    if (setCompetitionFilter && value) {
      let timeout = null;

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setCompetitionFilter(value.target.value);
      }, 1000);
    }
  };

  return <FilterInput label="Competition" onChange={handleChange} />;
}



export default memo(Aside);
