import Layout from "@/Components/Layout";
import NavBar from "@/Components/NavBar";
import ScrollToTop from "@/Components/ScrollToTop";
import { store } from "@/redux";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css"
export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider >

}
