"use client";
import "normalize.css/normalize.css";
import { memo, useMemo } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSearchParams } from "next/navigation";
import { getQueryDateFilter } from "@/app/utils";
import { useScoresByDate } from "@/app/libs/hooks";
import Header from "@/app/container/Header";
import Aside from "@/app/container/Aside";
import Content from "@/app/container/Content";
import styles from "./index.module.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 86400000, // 1 day
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const CompetitionsPageWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CompetitionsPageContent />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const CompetitionsPageContent = memo(function CompetitionsPageContent() {
  const searchParams = useSearchParams();

  const date = useMemo(() => {
    const params = new URLSearchParams(searchParams?.toString());
    const dateFilter = getQueryDateFilter(params);

    return dateFilter || null;
  }, [searchParams]);

  const data = useScoresByDate(date);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.main}>
        <Aside data={data} />
        <Content data={data} />
      </div>
    </div>
  );
});

export default memo(CompetitionsPageWrapper);
