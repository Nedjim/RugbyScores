import dynamic from "next/dynamic";

const Team = dynamic(() => import("@/container/Team"));

const TeamPage = async () => {
  return <Team />;
};

export default TeamPage;
