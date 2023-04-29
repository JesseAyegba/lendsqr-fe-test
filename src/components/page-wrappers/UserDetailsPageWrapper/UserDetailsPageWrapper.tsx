import Link from "next/link";
import React, { useEffect } from "react";
import styles from "./UserDetailsPageWrapper.module.scss";
import BackArrow from "@/components/illustrations/icons/BackArrow/BackArrow";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import OverviewBlock from "./OverviewBlock/OverviewBlock";
import DetailsBlock from "./DetailsBlock/DetailsBlock";
import { useRouter } from "next/router";
import { getUserById } from "@/utils/requests/users";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  clearSelectedUser,
  setSelectedUser,
} from "@/store/slices/users/usersSlice";
import { useAppSelector } from "@/hooks/useAppSelector";

const UserDetailsPageWrapper: React.FC = () => {
  const dispatch = useAppDispatch();
  const { userId } = useRouter().query;
  const user = useAppSelector((state) => state.users.selectedUser);

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const res = await getUserById(userId as string);
        const user = res.data;
        dispatch(setSelectedUser(user));
      } catch {
        // Should use Sentry in production
        console.log("Failed to fetch user");
      }
    };

    if (userId) {
      fetchUserById();
    }

    return () => {
      dispatch(clearSelectedUser());
    };
  }, [userId, dispatch]);
  return (
    <div>
      <section className={styles.section1}>
        <div>
          <Link className={styles.linkWrapper} href="/users">
            <div className={styles.link}>
              <span style={{ marginTop: "5px" }}>
                <BackArrow />
              </span>
              <span>Back to Users</span>
            </div>
          </Link>
        </div>
        <div className={styles.header}>
          <div>
            <SectionHeader text="User Details" />
          </div>
          <div className={styles.btns}>
            <button className={`${styles.btn} ${styles.btnDanger}`}>
              <span>BLACKLIST USER</span>
            </button>
            <button className={`${styles.btn} ${styles.btnSuccess}`}>
              <span>ACTIVATE USER</span>
            </button>
          </div>
        </div>
      </section>
      {user && (
        <section>
          <div className={styles.overview}>
            <OverviewBlock
              id={user?.userName}
              fullName={`${user?.profile?.firstName} ${user?.profile?.lastName}`}
              accountBalance={user?.accountBalance}
              accountNumber={user?.accountNumber}
              bank="Providus"
            />
          </div>
          <div>
            <DetailsBlock />
          </div>
        </section>
      )}
    </div>
  );
};

export default UserDetailsPageWrapper;
