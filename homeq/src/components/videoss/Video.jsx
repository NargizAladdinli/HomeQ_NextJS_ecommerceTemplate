import style from "./_video.module.scss";
import Image from "next/image";
import {BsPlayFill} from "react-icons/bs"
import Link from "next/link";

const Video = () => {
    return(
        <section className={style.videos}>
            <div className="container">
                <div className={style.video}>
                    <div className={style.title}>
                        <h2>Your dream house is no longer a dream.</h2>
                        <p>Ac, sit tincidunt commodo tincidunt. Mattis metus purus quam fames in vitae fringilla tempor. Non in in sodales suspendisse egestas integer iaculis semper ultrices. Lectus dui in pulvinar orci ut fermentum tortor mi, at.</p>
                    </div>
                    <div className={style.content}>
                        <div className={style.img}>
                            <Image
                            className={style.furniture}
                            src="/Image (2).png"
                            width={100}
                            height={100}
                            alt="Picture of the author"
                            />
                            <div className={style.playing}>
                            <Link className={style.play} href="https://www.youtube.com/watch?v=-g8SpZ1ij1g" target="blank"><BsPlayFill/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Video;