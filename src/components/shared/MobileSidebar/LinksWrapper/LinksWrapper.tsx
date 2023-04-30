import React from "react";
import LinkItem from "./LinkItem/LinkItem";
import styles from "./LinksWrapper.module.scss";

interface LinkObject {
  icon: React.ReactNode;
  text: string;
  href: string;
}

interface Props {
  header: string;
  data: LinkObject[];
}

const LinksWrapper: React.FC<Props> = ({ header, data }) => {
  return (
    <div>
      <div className={styles.header}>{header}</div>
      <div className={styles.wrapper}>
        {data.map((link) => {
          return (
            <LinkItem
              key={link.text}
              icon={link.icon}
              text={link.text}
              href={link.href}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LinksWrapper;
