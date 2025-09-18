"use client";
import clsx from "clsx";
import { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { QueryKeyFilter } from "@/types";
import { createQueryStringFilter } from "@/utils";
import styles from "./index.module.scss";

const SelectFilter = (props: {
  items: string[];
  onChange: (value: string) => void;
  queryKey: QueryKeyFilter;
}) => {
  const { items, queryKey, onChange } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryFilter = searchParams?.get(queryKey) || "";

  const handleClearFilter = useCallback(() => {
    const isExistingQuery = searchParams.get(queryKey);

    if (isExistingQuery) {
      const search = new URLSearchParams(searchParams.toString());
      search.delete(queryKey);
      router.push(`${pathname}?${search.toString()}`);
    }
  }, [pathname, searchParams, router, queryKey]);

  return (
    <div className={styles.selectFilter}>
      <FormControl fullWidth>
        <InputLabel size="medium">{queryKey}</InputLabel>
        <Select
          size="medium"
          labelId={`select-${queryKey}`}
          value={queryFilter}
          label={queryKey}
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
};

export default SelectFilter;
