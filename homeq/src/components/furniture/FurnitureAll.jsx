import Link from "next/link";
import style from "./_furniture.module.scss";

const Furnitureall = () => {
    return(
        <section className={style.seeall}>
            <div className="container">
                <div className={}>
                    <h4>Featured Properties</h4>
                    <Link href="#">See All</Link>
                </div>
            </div>
        </section>
    );
}
export default Furnitureall