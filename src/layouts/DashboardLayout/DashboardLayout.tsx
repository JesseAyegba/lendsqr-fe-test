import React from "react";
import styles from "./DashboardLayout.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.navWrapper}>
          <Navbar />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
