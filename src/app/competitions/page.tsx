import dynamic from "next/dynamic";

const Competitions = dynamic(() => import("@/container/Competitions"));

const CompetitionsPage = async () => {
  return <Competitions />;
};

export default CompetitionsPage;
