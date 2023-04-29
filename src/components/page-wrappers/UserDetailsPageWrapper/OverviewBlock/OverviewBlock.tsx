import React from "react";
import styles from "./OverviewBlock.module.scss";
import User from "@/components/illustrations/icons/User/User";
import SectionSubHeader from "@/components/shared/SectionSubHeader/SectionSubHeader";
import Link from "next/link";
import Rating from "@/components/illustrations/icons/Rating/Rating";

interface Props {
  id: string;
  fullName: string;
  accountBalance: number | string;
  accountNumber: string;
  bank: string;
}

const OverviewBlock: React.FC<Props> = ({
  id,
  fullName,
  accountBalance,
  accountNumber,
  bank,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.userWrapper}>
          <div>
            <User />
          </div>
          <div>
            <SectionSubHeader text={fullName} />
            <div className={styles.grayText}>{id}</div>
          </div>
        </div>
        <div className={styles.tier}>
          <div className={styles.grayText}>User&apos;s Tier</div>
          <div>
            <Rating />
          </div>
        </div>
        <div className={styles.balance}>
          <SectionSubHeader text={`₦${accountBalance}`} />
          <div className={styles.bank}>
            {accountNumber}/{bank}
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <Link className={`${styles.link} ${styles.linkActive}`} href="#">
          General Details
        </Link>
        <Link className={styles.link} href="#">
          Documents
        </Link>
        <Link className={styles.link} href="#">
          Bank Details
        </Link>
        <Link className={styles.link} href="#">
          Loans
        </Link>
        <Link className={styles.link} href="#">
          Savings
        </Link>
        <Link className={styles.link} href="#">
          App and System
        </Link>
      </div>
    </div>
  );
};

export default OverviewBlock;
