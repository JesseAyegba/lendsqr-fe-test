import React, { useEffect, useRef, useState } from "react";
import ThreeDots from "@/components/illustrations/icons/ThreeDots/ThreeDots";
import styles from "./Status.module.scss";
import Eye from "@/components/illustrations/icons/Eye/Eye";
import BlackListUser from "@/components/illustrations/icons/BlackListUser/BlackListUser";
import ActivateUser from "@/components/illustrations/icons/ActivateUser/ActivateUser";
import { useRouter } from "next/router";

interface Props {
  status: string;
  userId: string;
}

const Status: React.FC<Props> = ({ status, userId }) => {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current?.contains(e.target as Node) ||
        dropDownRef.current?.contains(e.target as Node)
      ) {
        return;
      } else {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    // Cleanup
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span
          className={
            status === "Active"
              ? `${styles.status} ${styles.statusActive}`
              : `${styles.status} ${styles.statusPending}`
          }
        >
          {status}
        </span>
        <button
          ref={buttonRef}
          onClick={() => setShowDropdown(!showDropdown)}
          className={styles.btn}
          style={{ marginTop: "8px", cursor: "pointer" }}
        >
          <ThreeDots />
        </button>
      </div>
      {showDropdown && (
        <div
          data-testid="status-dropdown"
          ref={dropDownRef}
          className={styles.dropDown}
        >
          <div
            onClick={() => {
              router.push(`/users/${userId}`);
            }}
            className={styles.dropDownItem}
          >
            <span>
              <Eye />
            </span>
            <span>View Details</span>
          </div>
          <div className={styles.dropDownItem}>
            <span>
              <BlackListUser />
            </span>
            <span>Blacklist User</span>
          </div>
          <div className={styles.dropDownItem}>
            <span>
              <ActivateUser />
            </span>
            <span>Activate User</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;
