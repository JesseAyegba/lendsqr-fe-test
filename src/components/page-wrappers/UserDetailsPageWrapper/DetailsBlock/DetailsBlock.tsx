import React from "react";
import styles from "./DetailsBlock.module.scss";
import InfoWrapper from "./InfoWrapper/InfoWrapper";
import { useAppSelector } from "@/hooks/useAppSelector";

const DetailsBlock: React.FC = () => {
  const user = useAppSelector((state) => state.users.selectedUser);

  const data1 = [
    {
      label: "FULL NAME",
      value: `${user?.profile?.firstName} ${user?.profile?.lastName}`,
    },
    {
      label: "PHONE NUMBER",
      value: `${user?.profile?.phoneNumber}`,
    },
    {
      label: "EMAIL ADDRESS",
      value: `${user?.email}`,
    },
    {
      label: "BVN",
      value: `${user?.profile?.bvn}`,
    },
    {
      label: "GENDER",
      value: `${user?.profile?.gender}`,
    },
    {
      label: "MARITAL STATUS",
      value: `Single`,
    },
    {
      label: "CHILDREN",
      value: "None",
    },
    {
      label: "TYPE OF RESIDENCE",
      value: "Personal Apartment",
    },
  ];
  const data2 = [
    {
      label: "LEVEL OF EDUCATION",
      value: `${user?.education?.level}`,
    },
    {
      label: "EMPLOYMENT STATUS",
      value: `${user?.education?.employmentStatus}`,
    },
    {
      label: "SECTOR OF EMPLOYMENT",
      value: `${user?.education?.sector}`,
    },
    {
      label: "DURATION OF EMPLOYMENT",
      value: `${user?.education?.duration}`,
    },
    {
      label: "OFFICE EMAIL",
      value: `${user?.education?.officeEmail}`,
    },
    {
      label: "MONTHLY INCOME",
      value: `₦${user?.education?.monthlyIncome[1]} - ₦${user?.education?.monthlyIncome[0]}`,
    },
    {
      label: "LOAN REPAYMENT",
      value: `${user?.education?.loanRepayment}`,
    },
  ];
  const data3 = [
    {
      label: "TWITTER",
      value: `${user?.socials?.twitter}`,
    },
    {
      label: "FACEBOOK",
      value: `${user?.socials?.facebook}`,
    },
    {
      label: "INSTAGRAM",
      value: `${user?.socials?.instagram}`,
    },
  ];
  const data4 = [
    {
      label: "FULL NAME",
      value: `${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`,
    },
    {
      label: "PHONE NUMBER",
      value: `${user?.guarantor?.phoneNumber}`,
    },
    {
      label: "EMAIL ADDRESS",
      value: `guarantor@gmail.com`,
    },
    {
      label: "RELATIONSHIP",
      value: `Mother`,
    },
  ];
  return (
    <div className={styles.container}>
      <InfoWrapper header="Personal Information" data={data1} />
      <hr className={styles.hr} />
      <InfoWrapper
        fourColumnGrid
        header="Education and Employment"
        data={data2}
      />
      <hr className={styles.hr} />
      <InfoWrapper header="Socials" data={data3} />
      <hr className={styles.hr} />
      <InfoWrapper header="Guarantor" data={data4} />
      <hr className={styles.hr} />
      <InfoWrapper data={data4} />
    </div>
  );
};

export default DetailsBlock;
