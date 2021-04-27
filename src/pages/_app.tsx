import { useEffect, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "config/dark-theme";
import { auth } from "lib/firebase";
import AuthContext from "lib/authContext";
import User from "lib/services/user";
import { AppProps } from "next/app";
import SiteLayout from "components/site-layout";
import { useRouter } from "next/router";
import SignIn from "./signin";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userId = user?.uid;
        const userProfile = await User.getProfile(userId);
        setUser({ userId, ...userProfile });
      } else {
        router.push("/signin", undefined, { shallow: true });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AuthContext.Provider value={user}>
          <SiteLayout>
            {user ? <Component {...pageProps} /> : <SignIn />}
          </SiteLayout>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
