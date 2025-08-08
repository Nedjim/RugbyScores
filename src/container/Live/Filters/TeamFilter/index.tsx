"use client";
import { memo, useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getQueryStringFilter } from "@/utils";
import { Match } from "@/libs/types";
import { QueryKeyFilter } from "@/types";
import SelectFilter from "@/components/SelectFilter";

const QUERY_KEY: QueryKeyFilter = "team";

function TeamFilter(props: { data: Match[] }) {
  const { data } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const items = useMemo(() => {
    const compFilter = getQueryStringFilter(searchParams.get("competition"));

    const elements = data
      ?.map((el) => {
        const { away, home, comp_name } = el;

        if (!compFilter || (compFilter && comp_name === compFilter)) {
          return [away, home];
        }
        return [];
      })
      .flat();

    return [...new Set(elements)].sort();
  }, [data, searchParams]);

  const handleChange = useCallback(
    (value: string | null) => {
      const isQueryExist = searchParams.get(QUERY_KEY);
      const search = new URLSearchParams(searchParams.toString());

      if (isQueryExist) {
        search.delete(QUERY_KEY);
      }
      router.push(`${pathname}?${search.toString()}&${QUERY_KEY}=${value}`);
    },
    [pathname, searchParams, router],
  );

  return (
    <SelectFilter items={items} onChange={handleChange} queryKey={QUERY_KEY} />
  );
}

export default memo(TeamFilter);
