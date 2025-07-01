"use client";
import { useSearchParams } from "next/navigation";
import { memo } from "react";

const NotFoundPage = () => {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  return <p>Vous êtes arrivé ici depuis : {from ?? "inconnu"}</p>;
};

export default memo(NotFoundPage);
