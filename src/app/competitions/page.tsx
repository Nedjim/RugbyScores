import dynamic from "next/dynamic";
import { Suspense } from "react";

const Loading = dynamic(() => import("@/app/loading"));
const Competitions = dynamic(() => import("@/container/Competitions"));

const CompetitionsPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Competitions />
    </Suspense>
  );
};

export default CompetitionsPage;
