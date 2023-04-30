import React, { useEffect } from "react";
import styles from "./MobileSidebar.module.scss";
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
import SavingsProducts from "@/components/illustrations/icons/SavingsProducts/SavingsProducts";
import Fees from "@/components/illustrations/icons/Fees/Fees";
import Transactions from "@/components/illustrations/icons/Transactions/Transactions";
import Services from "@/components/illustrations/icons/Services/Services";
import ServiceAccount from "@/components/illustrations/icons/ServiceAccount/ServiceAccount";
import Settlements from "@/components/illustrations/icons/Settlements/Settlements";
import Reports from "@/components/illustrations/icons/Reports/Reports";
import Preferences from "@/components/illustrations/icons/Preferences/Preferences";
import Pricing from "@/components/illustrations/icons/Pricing/Pricing";
import Audit from "@/components/illustrations/icons/Audit/Audit";
import { hideMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { motion } from "framer-motion";
import Logout from "@/components/illustrations/icons/Logout/Logout";

const MobileSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
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
      icon: <Organization />,
      text: "Organization",
      href: "#",
    },
    {
      icon: <LoanRequest />,
      text: "Loan Products",
      href: "#",
    },
    {
      icon: <SavingsProducts />,
      text: "Savings Products",
      href: "#",
    },
    {
      icon: <Fees />,
      text: "Fees and Charges",
      href: "#",
    },
    {
      icon: <Transactions />,
      text: "Transactions",
      href: "#",
    },
    {
      icon: <Services />,
      text: "Services",
      href: "#",
    },
    {
      icon: <ServiceAccount />,
      text: "Service Account",
      href: "#",
    },
    {
      icon: <Settlements />,
      text: "Settlements",
      href: "#",
    },
    {
      icon: <Reports />,
      text: "Reports",
      href: "#",
    },
  ];
  const data3 = [
    {
      icon: <Preferences />,
      text: "Preferences",
      href: "#",
    },
    {
      icon: <Pricing />,
      text: "Fees and Pricing",
      href: "#",
    },
    {
      icon: <Audit />,
      text: "Audit Logs",
      href: "#",
    },
  ];
  const variants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleResize = () => {
    if (window.innerWidth >= 992) {
      dispatch(hideMobileSidebar());
    }
  };

  // Listen for window resize when sidebar is open
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup - remove event listener when sidebar is closed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      className={styles.containerWrapper}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        exit={{
          opacity: 0,
          x: -1000,
          transition: {
            duration: 0.3,
          },
        }}
        className={styles.container}
      >
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
          <hr className={styles.hr} />
          <LinkItem icon={<Logout />} text="Logout" href="/" />
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(hideMobileSidebar())}
        className={styles.overlay}
      ></div>
    </motion.div>
  );
};

export default MobileSidebar;
