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
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers();
        dispatch(setUsers(res.data));
      } catch {
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
                <th key={text}>
                  <div className={styles.header}>
                    <span>{text}</span>
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
                <td className={styles.body}>Lendsqr</td>
                <td className={styles.body}>
                  {user.profile.firstName} {user.profile.lastName}
                </td>
                <td className={styles.body}>{user.email}</td>
                <td className={styles.body}>{user.phoneNumber}</td>
                <td className={styles.body}>
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
