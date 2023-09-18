import {FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md";
import style from "./_contact.module.scss";
import Send from "./Send";


const Contact = () =>{
    return(
        <section className={style.contact}>
            <div className={style.container}>
                <div className="row g-3 m-0">
                    <div className="col-sm-6 col-md-6 col-lg-4 p-0 m-0">
                        <div className={style.cards}>
                            <div className={style.img}>
                                <FaEnvelope/>
                            </div>
                            <div className={style.title}>
                                <h4>Email Address</h4>
                                <p>homeq.example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className={style.cards}>
                            <div className={style.img}>
                                <FaPhoneAlt/>
                            </div>
                            <div className={style.title}>
                                <h4>Phone Number</h4>
                                <p>(208) 555-0112</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className={style.cards}>
                            <div className={style.img}>
                                <MdLocationPin/>
                            </div>
                            <div className={style.title}>
                                <h4>Office Address</h4>
                                <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Send/>
            </div>
        </section>
    );
}
export default Contact