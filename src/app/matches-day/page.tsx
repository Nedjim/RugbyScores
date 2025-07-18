import { memo } from "react";
import dynamic from "next/dynamic";

const MatchesDay = dynamic(() => import("@/container/MatchesDay"));

const MatchesDayPage = async () => {
  return <MatchesDay />;
};

export default memo(MatchesDayPage);
