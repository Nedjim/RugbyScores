import { memo } from "react";
import { ContentType } from "..";
import ItemMenu from "@/components/Modal/ItemMenu";
import styles from "./index.module.scss";

const contentTypeValues: ContentType[] = ["players", "substitutes", "referees"];

const Navigation = (props: {
  currentContent: ContentType;
  setContent: (key: ContentType) => void;
}) => {
  const { setContent, currentContent } = props;

  return (
    <div className={styles.navigation}>
      {contentTypeValues.map((value, key) => {
        return (
          <ItemMenu
            key={key}
            onClick={() => setContent(value)}
            currentContent={currentContent}
            value={value}
          />
        );
      })}
    </div>
  );
};

export default memo(Navigation);
