import { memo, Suspense } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/app/loading"));
const MatchesDay = dynamic(() => import("@/container/MatchesDay"));

const MatchesDayPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <MatchesDay />
    </Suspense>
  );
};

export default memo(MatchesDayPage);
