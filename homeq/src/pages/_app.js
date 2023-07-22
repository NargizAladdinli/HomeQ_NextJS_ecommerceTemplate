import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/layout/Layout";
import "@/styles/scss/_style.scss";

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
