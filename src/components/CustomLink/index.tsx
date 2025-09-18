import Link from "next/link";
import styles from "./index.module.scss";

type LinkProps = {
  pathname: string;
  name: string;
  query: string;
};

const CustomLink = (props: LinkProps) => {
  const { pathname, name, query } = props;

  return (
    <div className={styles.customLink}>
      <Link href={`${pathname}?${query}`}>{name}</Link>
    </div>
  );
};

export default CustomLink;
