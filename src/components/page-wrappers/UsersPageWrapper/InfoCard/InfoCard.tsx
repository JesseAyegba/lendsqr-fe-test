import React from "react";
import styles from "./InfoCard.module.scss";

interface Props {
  icon: React.ReactNode;
  title: string;
  value: number | string;
}

const InfoCard: React.FC<Props> = ({ icon, title, value }) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default InfoCard;
