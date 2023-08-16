import "@/styles/scss/_style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/layout/Layout";


export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
