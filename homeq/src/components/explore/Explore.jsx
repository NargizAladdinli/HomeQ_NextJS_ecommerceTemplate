import Link from "next/link";
import style from "./_explore.module.scss";

const Explore = () => {
  return (
    <section className={style.explore}>
      <div style={{maxWidth:"1140px"}} className="container">
        <div className={style.ground}>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <img src="" alt="" />
            </div>
            <div className="col-lg-6">
              <div className={style.title}>
                <h3 className={style.h3title}>Looking for a Dream Home?</h3>
                <p className={style.ptitle}>We can help you relize your dream of a new home</p>
              </div>
            </div>
            <div className="col-lg-3">
                <Link className={style.explorelink} href="#">Explore Properties</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Explore;
