import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import React from "react";
import styles from "./UsersPageWrapper.module.scss";
import InfoCard from "./InfoCard/InfoCard";
import Users2 from "@/components/illustrations/icons/Users2/Users2";
import ActiveUsers from "@/components/illustrations/icons/ActiveUsers/ActiveUsers";
import UsersWithLoans from "@/components/illustrations/icons/UsersWithLoans/UsersWithLoans";
import UsersWithSavings from "@/components/illustrations/icons/UsersWithSavings/UsersWithSavings";

const UsersPageWrapper: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <SectionHeader text="Users" />
      </div>
      <div className={styles.cards}>
        <InfoCard icon={<Users2 />} title="USERS" value="2,453" />
        <InfoCard icon={<ActiveUsers />} title="ACTIVE USERS" value="2,453" />
        <InfoCard
          icon={<UsersWithLoans />}
          title="USERS WITH LOANS"
          value="12,453"
        />
        <InfoCard
          icon={<UsersWithSavings />}
          title="USERS WITH SAVINGS"
          value="102,453"
        />
      </div>
    </div>
  );
};

export default UsersPageWrapper;
