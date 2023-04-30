import React from "react";
import styles from "./Navbar.module.scss";
import { TextInput } from "@mantine/core";
import Search from "@/components/illustrations/icons/Search/Search";
import Bell from "@/components/illustrations/icons/Bell/Bell";
import Link from "next/link";
import ProfileDropdown from "@/components/shared/ProfileDropdown/ProfileDropdown";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { showMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.burger}>
        <RxHamburgerMenu
          onClick={() => {
            dispatch(showMobileSidebar());
          }}
        />
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.input}>
          <TextInput
            styles={{
              input: {
                borderTopLeftRadius: "0.5rem",
                borderBottomLeftRadius: "0.5rem",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                height: "2.5rem",

                "&:focus": {
                  border: "1px solid #39cdcc",
                },
              },
            }}
            placeholder="Search for anything"
          />
        </div>
        <button className={styles.btn}>
          <Search />
        </button>
      </div>
      <div className={styles.right}>
        <div>
          <Link className={styles.link} href="#">
            Docs
          </Link>
        </div>
        <div>
          <Bell />
        </div>
        <div>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
