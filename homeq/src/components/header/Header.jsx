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
              <Link className={style.logolink} href="#">
                Home<span>Q</span>
              </Link>
            </div>
            <nav>
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
                        <Link className={style.listdrop} href="#">Portofolio</Link>
                    </li>
                    <li>
                        <Link className={style.listdrop} href="#">Our Agent</Link>
                    </li>
                    <li>
                        <Link className={style.listdrop} href="#">Our Service</Link>
                    </li>
                    <li>
                        <Link className={style.listdrop} href="#">Wishlist</Link>
                    </li>
                    <li>
                        <Link className={style.listdrop} href="#">Location</Link>
                    </li>
                    <li>
                        <Link className={style.listdrop} href="#">FAQ</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className={style.shoping}>
              <div>
                <Link href="#">
                  <FaShoppingCart />
                </Link>
              </div>
              <div>
                <Link href="#">Sign in</Link>
              </div>
              <div>
                <Link href="#">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
