import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../config/dark-theme";
import { auth } from "../lib/firebase";
import AuthContext from "../lib/authContext";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [user, setUser] = useState({})

  React.useEffect(() => {
    auth.onAuthStateChanged(async function (user) {
      if (user) {
        console.log(user)
        setUser(user)
      } else {
        console.log("couldnt get user")
      }
    })

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
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
