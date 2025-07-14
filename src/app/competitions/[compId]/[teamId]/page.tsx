import { getTeamInfo } from "@/libs/routes";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Team from "@/container/Team";

type TeamPageProps = {
  params: Promise<{ teamId: string }>;
};

const TeamPage = async ({ params }: TeamPageProps) => {
  const queryClient = new QueryClient();
  const { teamId } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["team", teamId],
    queryFn: () => getTeamInfo(teamId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Team />
    </HydrationBoundary>
  );
};

export default TeamPage;
