import Link from "next/link";
import style from "./_notpage.module.scss";

const NotFoundPage = () => {
  return (
    <section className={style.notpage}>
      <div className="container">
        <div className={style.notpage404}>
          <div className={style.imgpage}></div>
          <div className={style.title}>
            <h1 className={style.firsttitle}>404</h1>
            <h2 className={style.secondtitle}>OOPS! PAGE NOT BE FOUND</h2>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed. name changed or is temporarily unavailable
            </p>
        <Link href="/" className={style.link404}>Back To Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFoundPage;
