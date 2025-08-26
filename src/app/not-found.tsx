import { Suspense } from "react";
import Loading from "@/app/loading";

const NotFound = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div>Page not found</div>
    </Suspense>
  );
};

export default NotFound;
