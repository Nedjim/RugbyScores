"use client";
import { memo, useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getQueryStringFilter } from "@/utils";
import { Match } from "@/libs/types";
import SelectFilter from "@/components/SelectFilter";

function TeamFilter(props: { data: Match[] }) {
  const { data } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const items = useMemo(() => {
    const competitionFilter = getQueryStringFilter(
      searchParams.get("competition"),
    );

    const elements = data
      ?.map((el) => {
        const { away, home, comp_name } = el;

        if (
          !competitionFilter ||
          (competitionFilter && comp_name === competitionFilter)
        ) {
          return [away, home];
        }
        return [];
      })
      .flat();

    return [...new Set(elements)].sort();
  }, [data, searchParams]);

  const handleChange = useCallback(
    (value: string | null) => {
      router.push(`${pathname}?${searchParams.toString()}&team=${value}`);
    },
    [pathname, searchParams, router],
  );

  return <SelectFilter items={items} onChange={handleChange} value="team" />;
}

export default memo(TeamFilter);
