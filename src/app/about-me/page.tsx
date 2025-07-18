import dynamic from "next/dynamic";

const About = dynamic(() => import("@/container/About"));

const AboutMePage = () => {
  return <About />;
};

export default AboutMePage;
