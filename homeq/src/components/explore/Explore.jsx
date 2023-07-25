import Link from "next/link";
import style from "./_explore.module.scss";

const Explore = () => {
  return (
    <section>
      <div style={{ maxWidth: "1140px" }} className="container">
        <div className={style.ground}>
          <div className="row align-items-center">
            <div className="col-lg-3">
              <img src="" alt="" />
            </div>
            <div className="col-lg-6">
              <div>
                <h3>Looking for a Dream Home?</h3>
                <p>We can help you relize your dream of a new home</p>
              </div>
            </div>
            <div className="col-lg-3">
                <Link href="#">Explore Properties</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Explore;
