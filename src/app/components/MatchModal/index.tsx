import { Fade, Modal } from "@mui/material";
import { memo } from "react";
import styles from "./index.module.scss";
import { useMatch } from "@/app/api/hooks";

type MatchModalType = {
  isOpen: boolean;
  id: number;
  away: string;
  home: string;
  onClose: () => void;
};

const MatchModal = (props: MatchModalType) => {
  const { isOpen, onClose, id, away, home } = props;
  const { data } = useMatch(id);

  console.log({ away, home, data });

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <div className={styles.modalContent}>
          <h2 id="transition-modal-title" className="modal-title">
            Teams players
          </h2>
          {data && (
            <div className={styles.teams}>
              <div className={styles.team}>
                <div>{home}</div>
                <div>
                  {data.home.teamsheet
                    .sort((a, b) => a.position - b.position)
                    .map((player, key) => {
                      return <Player player={player} key={key} />;
                    })}
                </div>
              </div>
              <div className={styles.team}>
                <div>{away}</div>
                <div>
                  {data.away.teamsheet.map((player, key) => {
                    return <Player player={player} key={key} />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

const Player = (props: { player: { name: string; position: number } }) => {
  const { name, position } = props.player;

  return (
    <div>
      {position} - {name}
    </div>
  );
};
export default memo(MatchModal);
