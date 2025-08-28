import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { memo } from "react";
import Link from "next/link";
import styles from "./index.module.scss";

type BackLinkProps = {
  href: { pathname: string; query: { [key in string]: string | null } };
  label: string;
};

function BackLink(props: BackLinkProps) {
  const { href, label } = props;

  return (
    <Link href={href} className={styles.backLink}>
      <FontAwesomeIcon icon={faAngleLeft} />
      <span className={styles.label}>{label}</span>
    </Link>
  );
}

export default memo(BackLink);
