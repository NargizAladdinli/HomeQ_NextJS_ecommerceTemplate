import style from "./_notpage.module.scss"

const NotFoundPage = () => {
    return(
        <section className={style.notpage}>
            <div className="container">
            <div className={style.notpage404}>
                <div className={style.imgpage}>
                    
                </div>
                <div>
                    <h1>404</h1>
                    <h2>OOPS! PAGE NOT BE FOUND</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default NotFoundPage