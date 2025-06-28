import dayjs from "dayjs";
import { Match } from "../libs/types";
import { getQueryStringFilter } from ".";
import { TAG_LIST } from "../container/Aside/StatusFilter";
import { NextRouter } from "next/router";

export const matchsFilter = (props: { data: Match[]; router: NextRouter }) => {
  const { data, router } = props;

  if (Object.keys(router.query).length) {
    return data.filter((match) => isMatchAvailable({ match, router }));
  }

  return sortMatchesByDate(data);
};

const sortMatchesByDate = (data: Match[]) => {
  return data.sort((a, b) => {
    const isBefore = dayjs(a.date).isBefore(dayjs(b.date));
    const isAfter = dayjs(a.date).isAfter(dayjs(b.date));

    if (isBefore) {
      return -1;
    }
    if (!isAfter) {
      return 1;
    }

    return 0;
  });
};

const isMatchAvailable = (props: { match: Match; router: NextRouter }) => {
  const { team, competition, status } = props.router.query;
  return (
    hasTeamFilter({ match: props.match, value: team as string }) &&
    hasCompetitionFilter({
      match: props.match,
      value: competition as string,
    }) &&
    hasStatusFilter({ match: props.match, value: status as string })
  );
};

const hasTeamFilter = (props: { match: Match; value: string }) => {
  const { match, value } = props;
  const filter = getQueryStringFilter(value);

  if (!filter) {
    return true;
  }
  return match.home.includes(filter) || match.away.includes(filter);
};

const hasCompetitionFilter = (props: { match: Match; value: string }) => {
  const { match, value } = props;
  const filter = getQueryStringFilter(value);

  if (!filter) {
    return true;
  }

  return match.comp_name.includes(filter);
};

const hasStatusFilter = (props: { match: Match; value: string }) => {
  const { match, value } = props;

  if (!value) {
    return true;
  }

  const statusList = TAG_LIST.find(({ id }) => id === value);

  return Boolean(statusList?.values.includes(match.status));
};
