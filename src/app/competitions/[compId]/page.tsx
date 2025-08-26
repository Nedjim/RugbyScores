import { Suspense } from "react";
import Loading from "@/app/loading";
import Competition from "@/container/Competition";

const CompetitionPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Competition />
    </Suspense>
  );
};

export default CompetitionPage;
