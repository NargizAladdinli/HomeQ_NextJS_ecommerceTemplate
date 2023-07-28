import Link from "next/link";
import style from "./_signin.module.scss";

const Register = () => {
    const signIn = (e) => {
        e.preventDefault()
    }
    return(
        <section className={style.sign}>
            <div className="container">
                <div className={style.title}>
                    <h2>Register your account</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <form onSubmit={signIn} className={style.form}>
                    <div className={style.inputdiv}>
                        <input type="text" name="text" placeholder="Last Name" />
                    <input type="email" name="email" placeholder="Email*" />
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="password" name="configmPassword" placeholder="Confirm Password" />
                    <div className={style.checkbox}>
                        <input className={style.checkinput} type="checkbox" />
                        <p className={style.checkspan}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                    </div>
                    <button type="submit">Create Account</button>
                    <div className={style.create}>
                        <span>Already have an account? </span>
                        <Link href="/signin"> Login</Link>
                    </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;
