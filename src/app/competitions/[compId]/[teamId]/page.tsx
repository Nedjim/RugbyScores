import { Suspense } from "react";
import Loading from "@/app/loading";
import Team from "@/container/Team";

const TeamPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Team />
    </Suspense>
  );
};

export default TeamPage;
