import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getCompetitions } from "@/libs/routes";
import Competitions from "@/container/Competitions";

const CompetitionsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["competitions"],
    queryFn: getCompetitions,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Competitions />
    </HydrationBoundary>
  );
};

export default CompetitionsPage;
