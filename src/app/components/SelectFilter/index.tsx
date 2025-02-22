import clsx from "clsx";
import { memo, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { createQueryStringFilter } from "@/app/utils";
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
    const query = router.query;

    if (query[value]) {
      delete query[value];
      router.push({ pathname, query });
    }
  }, [pathname, router, value]);

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
