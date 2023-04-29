import UserDetailsPageWrapper from "@/components/page-wrappers/UserDetailsPageWrapper/UserDetailsPageWrapper";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import Head from "next/head";

const UserDetails = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Users</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DashboardLayout>
        <UserDetailsPageWrapper />
      </DashboardLayout>
    </>
  );
};

export default UserDetails;
