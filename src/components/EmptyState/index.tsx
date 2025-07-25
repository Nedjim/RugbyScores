import { memo } from "react";
import Image from "next/image";
import EmptyStateImage from "../../../public/empty-state.png";
import styles from "./index.module.scss";

const DEFAULT_TEXT = "Sorry, there are no results. Please, change your filters";

const EmptyState = (props: { text?: string }) => {
  const { text } = props;

  return (
    <div className={styles.emptyState}>
      <div>
        <Image
          src={EmptyStateImage}
          alt="empty state"
          width={150}
          height={150}
        />
        <p>{text || DEFAULT_TEXT}</p>
      </div>
    </div>
  );
};

export default memo(EmptyState);
