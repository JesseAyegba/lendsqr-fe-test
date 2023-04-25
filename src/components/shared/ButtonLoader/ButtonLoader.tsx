import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./ButtonLoader.module.scss";

interface Props {
  color?: string;
}

const ButtonLoader: React.FC<Props> = ({ color }) => {
  return (
    <div className={styles.container}>
      <RotatingLines
        width="30"
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        visible={true}
      />
    </div>
  );
};

export default ButtonLoader;
