import { memo } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getDateFilter } from "@/libs/hooks";
import { getMatchesByDate } from "@/libs/routes";
import MatchesDay from "@/container/MatchesDay";

type MatchesDayPageProps = {
  searchParams: Promise<Record<string, string>>;
};

const MatchesDayPage = async ({ searchParams }: MatchesDayPageProps) => {
  const queryClient = new QueryClient();
  const { date } = await searchParams;
  const dateFilter = getDateFilter(date);

  await queryClient.prefetchQuery({
    queryKey: ["matches-by-date", String(dateFilter)],
    queryFn: () => getMatchesByDate(dateFilter),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MatchesDay />
    </HydrationBoundary>
  );
};

export default memo(MatchesDayPage);
