import React from "react";
import styles from "./AuthLayout.module.scss";
import BrandLogo from "@/components/illustrations/other/BrandLogo/BrandLogo";
import Worker from "@/components/illustrations/other/Worker/Worker";

interface Props {
  rightSection: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ rightSection }) => {
  return (
    <main className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftLogo}>
          <BrandLogo />
        </div>
        <div>
          <Worker />
        </div>
      </div>
      <div className={styles.right}>{rightSection}</div>
    </main>
  );
};

export default AuthLayout;
