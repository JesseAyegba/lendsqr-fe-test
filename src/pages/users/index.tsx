import UsersPageWrapper from "@/components/page-wrappers/UsersPageWrapper/UsersPageWrapper";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";

const Users = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Users</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DashboardLayout>
        <UsersPageWrapper />
      </DashboardLayout>
    </>
  );
};

export default Users;
