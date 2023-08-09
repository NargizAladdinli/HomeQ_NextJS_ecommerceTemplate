import Link from "next/link";
import style from "./_seeall.module.scss";

const SeeFurniture = () => {
    return(
        <section className={style.seeall}>
            <div className="container">
                <div className={style.flex}>
                    <h4>Featured Properties</h4>
                    <Link className={style.seelink} href="#">See All</Link>
                </div>
            </div>
        </section>
    )
}
export default SeeFurniture;