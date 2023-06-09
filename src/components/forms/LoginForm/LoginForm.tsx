import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import Link from "next/link";
import ButtonLoader from "@/components/shared/ButtonLoader/ButtonLoader";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "./LoginForm.schema";
import { TextInput } from "@mantine/core";
import { inputStyles } from "@/utils/other/inputStyles";
import { useRouter } from "next/router";
import { avenir } from "@/pages/_app";

interface FormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onBlur",
    resolver: yupResolver(LoginFormSchema),
  });
  const fontStyle = {
    fontFamily: avenir.style.fontFamily,
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setLoading(true);
      setTimeout(() => {
        router.push("/users");
      }, 3000);
    } catch {}
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header} style={fontStyle}>
        Welcome!
      </h1>
      <p className={styles.body} style={fontStyle}>
        Enter details to login.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.wrapper}>
          <div>
            <TextInput
              placeholder="Email"
              styles={inputStyles}
              {...register("email")}
              error={
                errors.email && (
                  <p style={fontStyle} className="error">
                    {errors.email.message}
                  </p>
                )
              }
            />
          </div>
          <div>
            <TextInput
              placeholder="Password"
              styles={inputStyles}
              {...register("password")}
              type={showPassword ? "text" : "password"}
              rightSection={
                showPassword ? (
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(false);
                    }}
                    className={styles.hideBtn}
                  >
                    <span style={fontStyle}>HIDE</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword(true);
                    }}
                    className={styles.hideBtn}
                  >
                    <span style={fontStyle}>SHOW</span>
                  </button>
                )
              }
              error={
                errors.password && (
                  <p style={fontStyle} className="error">
                    {errors.password.message}
                  </p>
                )
              }
            />
          </div>
          <Link className={styles.link} href="/" style={fontStyle}>
            FORGOT PASSWORD?
          </Link>
          <button
            style={{
              cursor: loading ? "not-allowed" : "pointer",
            }}
            disabled={loading}
            className={styles.submitBtn}
          >
            {loading ? <ButtonLoader /> : <span style={fontStyle}>LOG IN</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
