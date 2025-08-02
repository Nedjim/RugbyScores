import { memo, Suspense } from "react";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("@/app/loading"));
const Live = dynamic(() => import("@/container/Live"));

const MatchesDayPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Live />
    </Suspense>
  );
};

export default memo(MatchesDayPage);
