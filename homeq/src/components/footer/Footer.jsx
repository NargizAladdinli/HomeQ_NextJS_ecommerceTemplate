import Explore from "../explore/Explore";
import style from "./_footer.module.scss";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaSearchLocation } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Explore />
      <footer className={style.footer}> 
        <div style={{ maxWidth: "1140px" }} className="container">
          <div className="row">
            <div className="col-lg-4">
              <div>
                <Link className={style.logolink} href="#">
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
            <div className="col-lg-2">
                <p>Company</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
