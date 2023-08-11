import "../styles/globals.css";
// import { AuthContextProvider} from '../AuthContext/authContext';
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import ErrorBoundary from "../Components/ErrorBoundary/ErrorBoundary";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])

  return (
    // <AuthContextProvider>
    <>
      <NavigationBar />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <Footer />
    </>
    // </AuthContextProvider>
  );
}

export default MyApp;
