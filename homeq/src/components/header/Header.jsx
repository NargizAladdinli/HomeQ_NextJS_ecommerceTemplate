import Link from "next/link";
import style from "./_header.module.scss";
import { FaShoppingCart, FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <div className={style.headerflex}>
            <div>
              <Link className={style.logolink} href="/">
                Home<span>Q</span>
              </Link>
            </div>
            <nav className={style.navbar}>
              <ul className={style.listnav}>
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
                  <Link href="#">News</Link>
                </li>
                <li className={style.linav}>
                  <Link href="#">
                    Pages <FaAngleDown />
                  </Link>
                  <ul className={style.dropdown}>
                    <li>
                      <Link href="#">Portofolio</Link>
                    </li>
                    <li>
                      <Link href="#">Our Agent</Link>
                    </li>
                    <li>
                      <Link href="#">Our Service</Link>
                    </li>
                    <li>
                      <Link href="#">Wishlist</Link>
                    </li>
                    <li>
                      <Link href="/location">Location</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className={style.shoping}>
              <div>
                <Link className={style.shopcart} href="#">
                  <FaShoppingCart />
                <span>0</span>
                </Link>
              </div>
              <div className={style.signin}>
                <Link className={style.signlink} href="/signin">Sign in</Link>
              </div>
              <div className={style.register}>
                <Link className={style.registerlink} href="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
