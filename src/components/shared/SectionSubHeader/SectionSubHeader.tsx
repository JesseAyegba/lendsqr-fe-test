import React from "react";
import styles from "./SectionSubHeader.module.scss";

interface Props {
  text: string;
}

const SectionSubHeader: React.FC<Props> = ({ text }) => {
  return <h2 className={styles.container}>{text}</h2>;
};

export default SectionSubHeader;
