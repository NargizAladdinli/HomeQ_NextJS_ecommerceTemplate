import Contact from "@/components/contact/Contact";
import Head from "next/head";
import Link from "next/link";

const Contacts = () => {
    return(
        <>
        <Head>
        <title>HomeQ-Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cdn.shopify.com/s/files/1/0607/7287/6512/files/favicon_d5c9515a-64b4-47af-9ef1-236eddcc39a8_16x16.png?v=1637219740" />
        </Head>
        <main>
        <section className='head_body'>
            <div className='container'>
                <div className='content'>
                    <h2 className='titlehead'>Contact Us</h2>
                    <Link className='linkhome' href="/">Home / <span>Contact us</span></Link> 
                </div>
            </div>
        </section>
            <Contact/>
        </main>
        </>
    );
}
export default Contacts;