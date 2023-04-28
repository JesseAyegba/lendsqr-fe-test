import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import localFont from "@next/font/local";
import { Provider } from "react-redux";
import { store } from "@/store/store";

// export const avenir = localFont({
//   src: "../fonts/avenir/avenir-next-regular.otf",
//   variable: "--font-avenir",
// });

export const avenir = localFont({
  src: [
    {
      path: "../fonts/avenir/avenir-next-regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/avenir/avenir-next-bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-avenir",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        fontFamily: "Work Sans, sans-serif",
        fontFamilyMonospace: "Work Sans, sans-serif",
        headings: { fontFamily: "Work Sans, sans-serif" },
      }}
    >
      <Provider store={store}>
        <div className={`${avenir.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </MantineProvider>
  );
}
