import React, { useEffect, useState } from "react";
import styles from "./UsersTable.module.scss";
import Funnel from "@/components/illustrations/icons/Funnel/Funnel";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getUsers } from "@/utils/requests/users";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { Pagination, Table } from "@mantine/core";
import { setUsers } from "@/store/slices/users/usersSlice";
import Status from "../Status/Status";
import Filter from "./Filter/Filter";

const UsersTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const usersPerPage = 10;
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToshow = users?.slice(startIndex, endIndex);

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
  // Implement pagination to show 10 users per page

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
      <div className={styles.wrapper}>
        <Table>
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
            {usersToshow?.map((user) => {
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
      <div className={styles.pagination}>
        <div>
          <Filter
            startItem={startIndex + 1}
            endItem={endIndex}
            totalItems={users?.length}
          />
        </div>
        <div>
          <Pagination
            color="cyan"
            total={usersPerPage}
            onChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
