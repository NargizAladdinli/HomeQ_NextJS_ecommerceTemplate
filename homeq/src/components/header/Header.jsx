import Link from 'next/link';
import style from './_header.module.scss'

const Header = () => {
    return(
        <>
        <header>
            <div className="container">
                <div>
                <div className="logo">
               
               </div>
               <nav>
                   <ul>
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
                       <li>
                           <Link href="#">Pages</Link>
                       </li>
                       <li>
                           <Link href="#">Contact</Link>
                       </li>
                   </ul>
               </nav>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;