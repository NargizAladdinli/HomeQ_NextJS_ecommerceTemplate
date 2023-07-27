import Link from "next/link";
import style from "./_explore.module.scss";

const Explore = () => {
  return (
    <>
    <section className={style.explore}>
      <div className="container">
        <div className={style.ground}>
          <div className="row align-items-center">
            <div className="col-lg-3">
              
            </div>
            <div className="col-lg-6">
              <div className={style.title}>
                <h3 className={style.h3title}>Looking for a Dream Home?</h3>
                <svg
                  width="209"
                  height="12"
                  viewBox="0 0 209 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 10.9999C1 10.9999 61.4596 2.16784 100.541 1.08487C142.325 -0.0730059 208 11 208 11"
                    stroke="#DE8556"
                    stroke-width="2"
                  />
                </svg>

                <p className={style.ptitle}>
                  We can help you relize your dream of a new home
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <Link className={style.explorelink} href="#">
                Explore Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Explore;
