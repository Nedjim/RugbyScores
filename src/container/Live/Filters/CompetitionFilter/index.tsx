"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getQueryStringFilter } from "@/utils";
import { Match } from "@/libs/types";
import { QueryKeyFilter } from "@/types";
import SelectFilter from "@/components/SelectFilter";

const QUERY_KEY: QueryKeyFilter = "competition";

function CompetiitonFilter(props: { data: Match[] }) {
  const { data } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const teamFilter = searchParams.get("team");
  const formattedTeamFilter = getQueryStringFilter(teamFilter);

  const getItems = () => {
    const elements = data?.map((i) => {
      const { away, home, comp_name } = i;
      if (
        !formattedTeamFilter ||
        (formattedTeamFilter && [away, home].includes(formattedTeamFilter))
      ) {
        return comp_name;
      }
      return "";
    });

    return [...new Set(elements)].filter((e) => e).sort();
  };

  const handleChange = (value: string | null) => {
    const isQueryExist = searchParams.get(QUERY_KEY);
    const search = new URLSearchParams(searchParams.toString());

    if (isQueryExist) {
      search.delete(QUERY_KEY);
    }

    router.push(`${pathname}?${search.toString()}&${QUERY_KEY}=${value}`);
  };

  if (!getItems().length) {
    return null;
  }

  return (
    <SelectFilter
      items={getItems()}
      onChange={handleChange}
      queryKey={QUERY_KEY}
    />
  );
}

export default CompetiitonFilter;
