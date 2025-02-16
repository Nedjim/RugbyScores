import { memo, useContext, useState } from "react";
import styles from "./index.module.scss";
import { Chip } from "@mui/material";
import { MatchStatus } from "@/app/types";
import AppContext from "@/pages/context";

type Tag = "finish" | "in_progress" | "not_started" | "all";

const TAG_LIST: {
  id: Tag;
  label: string;
  filter: MatchStatus[];
}[] = [
  { id: "all", label: "All", filter: [] },
  { id: "finish", label: "Finish", filter: ["Result"] },
  {
    id: "in_progress",
    label: "In progress",
    filter: ["First Half", "Half Time", "Second Half", "Full Time"],
  },
  {
    id: "not_started",
    label: "Not started",
    filter: ["Postponed", "Cancelled"],
  },
];

const Tags = () => {
  const { setStatus } = useContext(AppContext);
  const [tag, setTag] = useState<Tag>("all");

  return (
    <div className={styles.tags}>
      {TAG_LIST.map((e, key) => {
        const { id, label, filter } = e;
        return (
          <Tag
            key={key}
            label={label}
            isSelected={id === tag}
            onClick={() => {
              if (filter) {
                setStatus(filter);
                setTag(id);
              }
            }}
          />
        );
      })}
    </div>
  );
};

type TagType = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const Tag = memo(function Tag(props: TagType) {
  const { label, isSelected, onClick } = props;

  return (
    <Chip
      label={label}
      variant={isSelected ? "filled" : "outlined"}
      onClick={onClick}
    />
  );
});

export default memo(Tags);
