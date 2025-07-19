import dynamic from "next/dynamic";
import { Suspense } from "react";

const Loading = dynamic(() => import("@/app/loading"));
const Competition = dynamic(() => import("@/container/Competition"));

const CompetitionPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Competition />
    </Suspense>
  );
};

export default CompetitionPage;
