import Link from "next/link";
import React from "react";
import styles from "./LinkItem.module.scss";
import { useRouter } from "next/router";

interface Props {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const LinkItem: React.FC<Props> = ({ icon, text, href }) => {
  const path = useRouter().pathname;
  const isActive = path.includes(href);

  return (
    <Link className={styles.link} href={href}>
      <div
        className={`${styles.container} ${isActive && styles.containerActive}`}
      >
        <div
          style={{
            opacity: isActive ? 1 : 0.5,
          }}
        >
          {icon}
        </div>
        <div>{text}</div>
      </div>
    </Link>
  );
};

export default LinkItem;
