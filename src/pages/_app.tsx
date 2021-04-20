import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../config/dark-theme";
import { auth } from "../lib/firebase";
import AuthContext from "../lib/authContext";
import User from "../lib/services/user"

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [user, setUser] = useState({});


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    const unsubscribe = auth.onAuthStateChanged(async(user)=> {
      if (user){
        const userId = user?.uid
        const userProfile = await User.getProfile(userId)
        setUser({userId, ...userProfile}) 
      }
    });

    return unsubscribe;
  }, []);

  return (
    <React.Fragment>
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
          <Component {...pageProps} />
        </AuthContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
