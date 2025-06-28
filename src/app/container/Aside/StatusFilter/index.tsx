"use client";
import { memo } from "react";
import { MatchStatus } from "@/app/libs/types";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import { getStatusFilter } from "@/app/utils";
import Tag from "@/app/components/Tag";
import styles from "./index.module.scss";

type Tag = "finish" | "in_progress" | "not_started" | "all";

export const TAG_LIST: {
  id: Tag;
  label: string;
  values: MatchStatus[];
}[] = [
  {
    id: "in_progress",
    label: "In progress",
    values: ["First Half", "Half Time", "Second Half", "Full Time"],
  },
  { id: "finish", label: "Finish", values: ["Result"] },
  {
    id: "not_started",
    label: "Not started",
    values: ["Postponed", "Cancelled", "Not Started"],
  },
];

const StatusFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams?.toString());
  const statusFilter = getStatusFilter(params);

  return (
    <div className={styles.tags}>
      {TAG_LIST.map((e, key) => {
        const { id, label } = e;
        const isSelected = id === statusFilter;

        return (
          <Tag
            key={key}
            label={label}
            isSelected={isSelected}
            onClick={() => {
              const query = { ...router.query };

              if (!isSelected) {
                query.status = id;
              } else {
                delete query.status;
              }

              router.push({ pathname, query });
            }}
          />
        );
      })}
    </div>
  );
};

export default memo(StatusFilter);
