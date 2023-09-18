import ServiceMap from "./SeriviceMap";
import style from "./_services.module.scss";

const Service = () => {
    return(
        <section className={style.service}>
            <div className="container">
                <h2>Our Service</h2>
                <div className={style.cards}>
                <div className="row">
                    <ServiceMap/>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Service;