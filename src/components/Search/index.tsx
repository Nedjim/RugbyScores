import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import styles from "./index.module.scss";

type SearchProps = {
  value: string;
  setValue: (key: string) => void;
};
const Search = (props: SearchProps) => {
  const { value, setValue } = props;

  return (
    <div className={styles.search}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <TextField
          label="Filter by name"
          hiddenLabel
          variant="standard"
          size="small"
          color="success"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Box>
    </div>
  );
};

export default Search;
