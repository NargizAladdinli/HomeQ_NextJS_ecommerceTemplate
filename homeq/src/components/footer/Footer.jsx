import Explore from "../explore/Explore";
import style from "./_footer.module.scss";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaSearchLocation, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TbSend, TbBrandFacebookFilled } from "react-icons/tb"

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
      <Explore />
      <footer className={style.footer}> 
        <div className="container">
          <div className="row g-2">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div>
                <Link className={style.logolink} href="/">
                  Home<span>Q</span>
                </Link>
                <p className={style.pfooter}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
              </div>
              <div className={style.adress}>
                <ul className={style.list}> 
                    <li>
                        <Link className={style.icon} href="#"><FaPhone/></Link>
                        <Link className={style.title} href="#">
                            <p>Phone</p>
                            <span>(208) 555-0112</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.icon} href="#"><FaEnvelope/></Link>
                        <Link className={style.title} href="mailto:homeq.example@gmail.com">
                            <p>Email</p>
                            <span>homeq.example@gmail.com</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.icon} href="#"><FaSearchLocation/></Link>
                        <Link className={style.title} href="#">
                            <p>Address</p>
                            <span>3517 W. Gray St. Utica, Pennsylvania 57867</span>
                        </Link>
                    </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mt-2">
                <h3 className={style.titlehead}>Company</h3>
                <ul className={style.listhead}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="#">About</Link>
                    </li>
                    <li>
                        <Link href="#">Shop</Link>
                    </li>
                    <li>
                        <Link href="#">Wishlist</Link>
                    </li>
                    <li>
                        <Link href="#">Portofolio</Link>
                    </li>
                </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 mt-2">
            <h3 className={style.titlehead}>Service</h3>
                <ul className={style.listhead}>
                    <li>
                        <Link href="/signin">Login</Link>
                    </li>
                    <li>
                        <Link href="/register">Register</Link>
                    </li>
                    <li>
                        <Link href="/location">Location</Link>
                    </li>
                    <li>
                        <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                        <Link href="#">News</Link>
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4 mt-2">
            <h3 className={style.titlehead}>Newsletter</h3>
            <p className={style.pfooter}>Subscribe to our newsletter and receive updates via email</p>
            <form onSubmit={handleSubmit}>
                <input className={style.input} type="email" placeholder="Email Address" />
                <button className={style.button} type="submit"><TbSend/></button>
            </form>
            <div className={style.sosial}>
                <h3 className={style.titlehead}>Social Account</h3>
                <div className={style.links}>
                <Link className={style.sosiallink} href="https://www.facebook.com/rollsroycemotorcars" target="blank"><TbBrandFacebookFilled/></Link>
                <Link className={style.sosiallink} href="https://www.instagram.com/rollsroycecars/" target="blank"><FaInstagram/></Link>
                <Link className={style.sosiallink} href="https://web.whatsapp.com/" target="blank"><FaWhatsapp/></Link>
                </div>
            </div>
            </div>
          </div>
          <div className={style.allrights}>
            <p className={style.rights}>All Rights Reserved Company 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
