import { memo } from "react";
import Image from "next/image";
import DescriptionImg from "../../../public/myself.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

import styles from "./index.module.scss";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.description}>
        <Image
          className={styles.img}
          src={DescriptionImg}
          alt="Picture of Nedjim DANIMON NGABA"
          width={200}
          height={250}
          priority
          placeholder="blur"
        />
        <section className={styles.section}>
          <p>Hi !</p>
          <p>
            My name is Nedjim DANIMON NGABA. I am a Rugby lover and a front-end
            developper since 2018.
          </p>
          <p>
            I live in France and I often watch rugby on demand but it is
            difficult to get schedules of matchs and compositions of teams
            without getting spoiled.
          </p>
          <p>
            Rugby scores allows to get those important matchs details
            (schedules, compositions, referees, …) without getting spoiled. Some
            new features will be added progressively.
          </p>
          <p>
            Please, feel free to contact me for any informations, feedbacks or
            simply to say hi! :)
          </p>
          <p>Sportively</p>
        </section>
      </div>
      <div className={styles.networks}>
        <Link
          href="https://www.linkedin.com/in/nedjimdn/"
          passHref={true}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="https://github.com/Nedjim" passHref={true} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link href="https://x.com/nedjimdn" passHref={true} target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
    </div>
  );
};

export default memo(AboutMe);
