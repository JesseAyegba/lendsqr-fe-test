import React from "react";
import styles from "./SectionHeader.module.scss";

interface Props {
  text: string;
}

const SectionHeader: React.FC<Props> = ({ text }) => {
  return <h1 className={styles.container}>{text}</h1>;
};

export default SectionHeader;
