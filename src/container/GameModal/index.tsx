import { memo, useState } from "react";
import { Fade, Modal } from "@mui/material";
import { roboto } from "@/utils";
import { useMatch } from "@/libs/hooks";
import Referees from "@/components/Modal/Referees";
import PlayersContent from "./PlayersContent";
import SubstitutesContent from "./SubstitutesContent";
import Navigation from "./Navigation";
import styles from "./index.module.scss";

type GameModalType = {
  isOpen: boolean;
  id: number;
  onClose: () => void;
};

export type ContentType = "players" | "substitutes" | "referees";

const GameModal = (props: GameModalType) => {
  const { isOpen, onClose, id } = props;
  const { data, status, isSuccess } = useMatch(id);
  const [currentContent, setContent] = useState<ContentType>("players");

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <div className={`${styles.modalContent} ${roboto.className}`}>
          {isSuccess && status === "success" && data && (
            <div>
              <Navigation
                currentContent={currentContent}
                setContent={setContent}
              />
              {currentContent === "players" && <PlayersContent data={data} />}
              {currentContent === "substitutes" && (
                <SubstitutesContent data={data} />
              )}
              {currentContent === "referees" && (
                <Referees referees={data.referees} />
              )}
            </div>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default memo(GameModal);
