import { Suspense } from "react";
import Loading from "@/app/loading";
import Competitions from "@/container/Competitions";

const CompetitionsPage = async () => {
  return (
    <Suspense fallback={<Loading />}>
      <Competitions />
    </Suspense>
  );
};

export default CompetitionsPage;
