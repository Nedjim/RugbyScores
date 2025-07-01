import dayjs from "dayjs";
import { Match } from "../libs/types";
import { getQueryStringFilter } from ".";
import { TAG_LIST } from "../container/Aside/StatusFilter";
import { ReadonlyURLSearchParams } from "next/navigation";

const getAllQueryKeys = (searchParams: ReadonlyURLSearchParams) => {
  const queryKeys = searchParams.keys().reduce((prev, curr) => {
    return [...prev, curr];
  }, [] as string[]);

  return queryKeys;
};

export const matchesFilter = (props: {
  data: Match[];
  searchParams: ReadonlyURLSearchParams;
}) => {
  const { data, searchParams } = props;

  const queryKeys = getAllQueryKeys(searchParams);

  if (queryKeys.length) {
    return data.filter((match) => isMatchAvailable({ match, searchParams }));
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

const isMatchAvailable = (props: {
  match: Match;
  searchParams: ReadonlyURLSearchParams;
}) => {
  const { match, searchParams } = props;
  const team = searchParams.get("team");
  const competition = searchParams.get("competition");
  const status = searchParams.get("status");

  return (
    hasTeamFilter({ match, value: team }) &&
    hasCompetitionFilter({
      match: props.match,
      value: competition,
    }) &&
    hasStatusFilter({ match: props.match, value: status })
  );
};

const hasTeamFilter = (props: { match: Match; value: string | null }) => {
  const { match, value } = props;
  const filter = getQueryStringFilter(value);

  if (!filter) {
    return true;
  }
  return match.home.includes(filter) || match.away.includes(filter);
};

const hasCompetitionFilter = (props: {
  match: Match;
  value: string | null;
}) => {
  const { match, value } = props;
  const filter = getQueryStringFilter(value);

  if (!filter) {
    return true;
  }

  return match.comp_name.includes(filter);
};

const hasStatusFilter = (props: { match: Match; value: string | null }) => {
  const { match, value } = props;

  if (!value) {
    return true;
  }

  const statusList = TAG_LIST.find(({ id }) => id === value);

  return Boolean(statusList?.values.includes(match.status));
};
