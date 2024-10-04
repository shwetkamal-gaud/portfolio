import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "@/Components/Layout";
import { store } from "@/redux";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Dynamically import Bootstrap only on the client-side
    if (typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.min.js');
      import('bootstrap/dist/js/bootstrap.js');
    }
  }, []);
  return (
    <Provider store={store}>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
