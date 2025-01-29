import { memo } from "react";
import styles from "./index.module.scss";
import ItemMenu from "@/app/components/Modal/ItemMenu";
import { ContentType } from "..";

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
