import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getTeamsByCompetitionSeason } from "@/libs/routes";
import Competition from "@/container/Competition";

type CompetitionPageProps = {
  searchParams: Promise<Record<string, string>>;
  params: Promise<{ compId: string }>;
};

const CompetitionPage = async ({
  searchParams,
  params,
}: CompetitionPageProps) => {
  const queryClient = new QueryClient();
  const { compId } = await params;
  const { season } = await searchParams;

  await queryClient.prefetchQuery({
    queryKey: ["teams", "competition", compId, season],
    queryFn: () => getTeamsByCompetitionSeason(compId, season),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Competition />
    </HydrationBoundary>
  );
};

export default CompetitionPage;
