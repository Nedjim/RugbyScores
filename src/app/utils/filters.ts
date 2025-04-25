import { Match } from "../libs/types";
import { getQueryStringFilter, getStatusFilter } from ".";
import { TAG_LIST } from "../container/Aside/StatusFilter";
import dayjs from "dayjs";

export const matchsFilter = (props: {
  data: Match[];
  searchParams: URLSearchParams | null;
}) => {
  const { data, searchParams } = props;
  const params = new URLSearchParams(searchParams?.toString());

  if (searchParams) {
    return data.filter((match) => isMatchAvailable({ match, params }));
  }

  return sortMathsByDate(data);
};

const sortMathsByDate = (data: Match[]) => {
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

const isMatchAvailable = (props: { match: Match; params: URLSearchParams }) => {
  return (
    hasTeamFilter(props) &&
    hasCompetitionFilter(props) &&
    hasStatusFilter(props)
  );
};

const hasTeamFilter = (props: { match: Match; params: URLSearchParams }) => {
  const { match, params } = props;
  const filter = getQueryStringFilter(params, "team");

  if (!filter) {
    return true;
  }
  return match.home.includes(filter) || match.away.includes(filter);
};

const hasCompetitionFilter = (props: {
  match: Match;
  params: URLSearchParams;
}) => {
  const { match, params } = props;
  const filter = getQueryStringFilter(params, "competition");

  if (!filter) {
    return true;
  }

  return match.comp_name.includes(filter);
};

const hasStatusFilter = (props: { match: Match; params: URLSearchParams }) => {
  const { match, params } = props;
  const filter = getStatusFilter(params);

  if (!filter) {
    return true;
  }

  const statusList = TAG_LIST.find(({ id }) => id === filter);

  return Boolean(statusList?.values.includes(match.status));
};
