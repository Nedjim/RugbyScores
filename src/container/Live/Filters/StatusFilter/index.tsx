"use client";
import { memo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MatchStatus } from "@/libs/types";
import Tag from "@/components/Tag";
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
  const statusFilter = searchParams.get("status");

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
              const search = new URLSearchParams(searchParams.toString());

              if (!isSelected) {
                search.set("status", id);
              } else {
                search.delete("status");
              }
              router.push(`${pathname}?${search.toString()}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default memo(StatusFilter);
