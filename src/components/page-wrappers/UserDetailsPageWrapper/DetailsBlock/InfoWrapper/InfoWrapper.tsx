import React from "react";
import styles from "./InfoWrapper.module.scss";

interface Info {
  label: string;
  value: string;
}

interface Props {
  header?: string;
  data: Info[];
  fourColumnGrid?: boolean;
}

const InfoWrapper: React.FC<Props> = ({ header, data, fourColumnGrid }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <div className={fourColumnGrid ? styles.wrapper4 : styles.wrapper}>
        {data.map((info) => {
          return (
            <div>
              <div className={styles.label}>{info.label}</div>
              <div className={styles.value}>{info.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoWrapper;
