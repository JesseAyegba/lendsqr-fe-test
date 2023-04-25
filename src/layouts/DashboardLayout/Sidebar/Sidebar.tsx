import React from "react";
import styles from "./Sidebar.module.scss";
import SmallBrandLogo from "@/components/illustrations/other/SmallBrandLogo/SmallBrandLogo";
import LinksWrapper from "./LinksWrapper/LinksWrapper";
import Users from "@/components/illustrations/icons/Users/Users";
import Guarantors from "@/components/illustrations/icons/Guarantors/Guarantors";
import Loans from "@/components/illustrations/icons/Loans/Loans";
import Decision from "@/components/illustrations/icons/Decision/Decision";
import Savings from "@/components/illustrations/icons/Savings/Savings";
import LoanRequest from "@/components/illustrations/icons/LoanRequest/LoanRequest";
import Whitelist from "@/components/illustrations/icons/Whitelist/Whitelist";
import Karma from "@/components/illustrations/icons/Karma/Karma";
import LinkItem from "./LinksWrapper/LinkItem/LinkItem";
import Organization from "@/components/illustrations/icons/Organization/Organization";
import Home from "@/components/illustrations/icons/Home/Home";
import DropdownLink from "@/components/shared/DropdownLink/DropdownLink";

const Sidebar: React.FC = () => {
  const data1 = [
    {
      icon: <Users />,
      text: "Users",
      href: "/users",
    },
    {
      icon: <Guarantors />,
      text: "Guarantors",
      href: "#",
    },
    {
      icon: <Loans />,
      text: "Loans",
      href: "#",
    },
    {
      icon: <Decision />,
      text: "Decision Models",
      href: "#",
    },
    {
      icon: <Savings />,
      text: "Savings",
      href: "#",
    },
    {
      icon: <LoanRequest />,
      text: "Loan Requests",
      href: "#",
    },
    {
      icon: <Whitelist />,
      text: "Whitelist",
      href: "#",
    },
    {
      icon: <Karma />,
      text: "Karma",
      href: "#",
    },
  ];
  const data2 = [
    {
      icon: <Users />,
      text: "Users",
      href: "#",
    },
    {
      icon: <Guarantors />,
      text: "Guarantors",
      href: "#",
    },
    {
      icon: <Loans />,
      text: "Loans",
      href: "#",
    },
    {
      icon: <Decision />,
      text: "Decision Models",
      href: "#",
    },
    {
      icon: <Savings />,
      text: "Savings",
      href: "#",
    },
    {
      icon: <LoanRequest />,
      text: "Loan Requests",
      href: "#",
    },
    {
      icon: <Whitelist />,
      text: "Whitelist",
      href: "#",
    },
    {
      icon: <Karma />,
      text: "Karma",
      href: "#",
    },
  ];

  const data3 = [
    {
      icon: <Users />,
      text: "Users",
      href: "#",
    },
    {
      icon: <Guarantors />,
      text: "Guarantors",
      href: "#",
    },
    {
      icon: <Loans />,
      text: "Loans",
      href: "#",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <SmallBrandLogo />
      </div>
      <div className={styles.linksWrapper}>
        <div>
          <DropdownLink icon={<Organization />} text="Search Organization" />
        </div>
        <div>
          <LinkItem icon={<Home />} text="Dashboard" href="#" />
        </div>
        <LinksWrapper header="CUSTOMERS" data={data1} />
        <LinksWrapper header="BUSINESSES" data={data2} />
        <LinksWrapper header="SETTINGS" data={data3} />
      </div>
    </div>
  );
};

export default Sidebar;
