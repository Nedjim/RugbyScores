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
          {!data?.referees && "loading..."}
          {data?.referees && (
            <>
              <h2 id="transition-modal-title" className={styles.title}>
                Teams players
              </h2>
              <div className={styles.teams}>
                <div className={styles.team}>
                  <div className={styles.name}>{home}</div>
                  <Players players={data.home.teamsheet} />
                </div>
                <div className={styles.team}>
                  <div className={styles.name}>{away}</div>
                  <Players players={data.away.teamsheet} />
                </div>
              </div>

              <h2 className={styles.title}>Referees</h2>
              <Referees referees={data.referees}/>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

const Players = (props: { players: any }) => {
  const { players } = props;

  return (
    <div>
      {players
        .sort((a, b) => a.position - b.position)
        .map((player, key) => {
          const { name, position } = player;
          return (
            <div key={key} className={styles.line}>
              <div className={styles.position}>{position}</div>{" "}
              <div>{name}</div>
            </div>
          );
        })}
    </div>
  );
};

const Referees = (props: { referees: any }) => {
  const { referees } = props;

  return <div>
    {referees.map((referee, key) => {
      const { name , role} = referee;

      return <div key={key} className={styles.line}>
        {name} ({ role })
      </div>
    })}
  </div>
}
export default memo(MatchModal);
