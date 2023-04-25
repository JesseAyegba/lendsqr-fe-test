import Head from "next/head";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import LoginForm from "@/components/forms/LoginForm/LoginForm";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lendsqr | Login</title>
        <meta
          name="Welcome to the Lendsqr Dashboard"
          content="The Lendsqr Dashboard"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AuthLayout rightSection={<LoginForm />} />
    </>
  );
};

export default Home;
