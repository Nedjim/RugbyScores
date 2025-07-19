import { Suspense } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/app/loading"));
const Team = dynamic(() => import("@/container/Team"));

const TeamPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Team />
    </Suspense>
  );
};

export default TeamPage;
