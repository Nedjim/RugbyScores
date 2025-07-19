import dynamic from "next/dynamic";
import { Suspense } from "react";

const Loading = dynamic(() => import("@/app/loading"));

const NotFound = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>Page not found</div>
    </Suspense>
  );
};

export default NotFound;
