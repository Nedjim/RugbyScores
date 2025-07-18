"use client";
import clsx from "clsx";
import { memo, useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { createQueryStringFilter } from "@/utils";
import styles from "./index.module.scss";

function SelectFilter(props: {
  items: string[];
  onChange: (value: string) => void;
  value: string;
}) {
  const { items, value, onChange } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryFilter = searchParams?.get(value) || "";

  const handleClearFilter = useCallback(() => {
    const isExistingQuery = searchParams.get(value);

    if (isExistingQuery) {
      const search = new URLSearchParams(searchParams.toString());
      search.delete(value);
      router.push(`${pathname}?${search.toString()}`);
    }
  }, [pathname, searchParams, router, value]);

  return (
    <div className={styles.selectFilter}>
      <FormControl fullWidth>
        <InputLabel size="small">
          <span>{value}</span>
        </InputLabel>
        <Select
          size="small"
          labelId={`select-${value}`}
          value={queryFilter}
          label={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {items.map((name, key) => {
            return (
              <MenuItem key={key} value={createQueryStringFilter(name)}>
                {name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Button
        className={clsx(styles.clearButton, queryFilter && styles.isAvailable)}
        size="small"
        hidden={false}
        onClick={handleClearFilter}
        color="inherit"
      >
        <FontAwesomeIcon icon={faX} />
      </Button>
    </div>
  );
}

export default memo(SelectFilter);
