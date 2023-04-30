import React, { useEffect } from "react";
import styles from "./UsersTable.module.scss";
import Funnel from "@/components/illustrations/icons/Funnel/Funnel";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getUsers } from "@/utils/requests/users";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Table } from "@mantine/core";
import { setUsers } from "@/store/slices/users/usersSlice";
import Status from "../Status/Status";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);
  const headers = [
    {
      text: "ORGANIZATION",
      isHidden: true,
      isHidden2: false,
    },
    {
      text: "USERNAME",
      isHidden: false,
      isHidden2: false,
    },
    {
      text: "EMAIL",
      isHidden: true,
      isHidden2: false,
    },
    {
      text: "PHONE NUMBER",
      isHidden: true,
      isHidden2: false,
    },
    {
      text: "DATE JOINED",
      isHidden: false,
      isHidden2: true,
    },
    {
      text: "STATUS",
      isHidden: false,
      isHidden2: false,
    },
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        dispatch(setUsers(res.data));
      } catch {
        // Should use Sentry in production
        console.log("Failed to fetch users");
      } finally {
      }
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Table verticalSpacing="xl">
        <thead>
          <tr>
            {headers.map((text) => {
              return (
                <th
                  className={`${text.isHidden && styles.hiddenField} ${
                    text.isHidden2 && styles.hiddenField2
                  } }`}
                  key={text.text}
                >
                  <div className={styles.header}>
                    <span>{text.text}</span>
                    <span className={styles.funnel}>
                      <Funnel />
                    </span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            // Status should be pending if user.createdAt is greater than today's date
            // Status should be active if user.createdAt is less  or equal to today's date
            const status =
              new Date(user.createdAt) > new Date() ? "Pending" : "Active";
            return (
              <tr key={user.id}>
                <td className={`${styles.body} ${styles.hiddenField}`}>
                  Lendsqr
                </td>
                <td className={`${styles.body}`}>
                  {user.profile.firstName} {user.profile.lastName}
                </td>
                <td className={`${styles.body} ${styles.hiddenField}`}>
                  {user.email}
                </td>
                <td className={`${styles.body} ${styles.hiddenField}`}>
                  {user.phoneNumber}
                </td>
                <td className={`${styles.body} ${styles.hiddenField2}`}>
                  {new Date(user.createdAt).toDateString()}{" "}
                  {/* {new Date(user.createdAt).toLocaleTimeString()} */}
                </td>
                <td>
                  <Status status={status} userId={user.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
