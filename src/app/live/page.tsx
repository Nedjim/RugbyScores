import { Suspense } from "react";
import Loading from "@/app/loading";
import Live from "@/container/Live";

const MatchesDayPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Live />
    </Suspense>
  );
};

export default MatchesDayPage;
