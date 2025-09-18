"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useCurrentSeason } from "@/libs/hooks";
import CustomLink from "@/components/CustomLink";
import styles from "./index.module.scss";

type CustomLinksProps = {
  links: { id: string | number; name: string }[];
};

const CustomLinks = (props: CustomLinksProps) => {
  const { links } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const season = useCurrentSeason();
  const seasonFilter = searchParams.get("season") || season;

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
              query={`season=${seasonFilter}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CustomLinks;
