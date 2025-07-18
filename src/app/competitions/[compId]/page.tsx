import dynamic from "next/dynamic";

const Competition = dynamic(() => import("@/container/Competition"));

const CompetitionPage = async () => {
  return <Competition />;
};

export default CompetitionPage;
