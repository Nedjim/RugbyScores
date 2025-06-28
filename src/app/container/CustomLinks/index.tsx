"use client";
import { memo, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import CustomLink from "@/app/components/CustomLink";
import styles from "./index.module.scss";
import { useCurrentSeason } from "@/app/libs/hooks";

type CustomLinksProps = {
  links: { id: string | number; name: string }[];
};

const CustomLinks = (props: CustomLinksProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const season = useCurrentSeason();

  const { links } = props;

  const seasonFilter = useMemo(() => {
    const { season: seasonFilter } = router.query;

    return seasonFilter || season;
  }, [router, season]);

  return (
    <div className={styles.list}>
      {links.map((link) => {
        const { id, name } = link;
        const url = `${pathname}/${id}`;

        return (
          <div key={id} className={styles.item}>
            <CustomLink
              pathname={url}
              name={name}
              query={{ season: seasonFilter as string }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default memo(CustomLinks);
