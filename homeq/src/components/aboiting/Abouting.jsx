import style from "./_abouting.module.scss";
import Image from "next/image";

const Abouting = () => {
    return(
        <section className={style.abouting}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className={style.img}>
                            <Image
                            className={style.imgbulding}
                             src="/Rectangle 7.png"
                             width={500}
                             height={500}
                             alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={style.text}>
                            <div className={style.title}>
                                <h2>We are your partner in creating a legacy building facade.</h2>
                            </div>
                            <div className={style.content}>
                                <p>Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at. In adipiscing arcu, consectetur lacus eu.</p>
                                <p>Non, augue integer augue accumsan ante. Ultricies libero condimentum amet, enim sit neque nascetur mollis cursus. Pellentesque tincidunt libero, in pharetra, nunc. Tincidunt egestas amet tincidunt consequat in sed arcu turpis neque.</p>
                                <p>Nam elementum aliquet integer sit condimentum sed. Pulvinar aliquam nascetur maecenas risus vestibulum eu. Pellentesque non molestie est mauris tristique pretium. Congue ac et neque vulputate et morbi gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Abouting;