import Link from "next/link";
import style from "./_signin.module.scss";

const SignIn = () => {
    const signIn = (e) => {
        e.preventDefault()
    }
    return(
        <section className={style.sign}>
            <div className="container">
                <div className={style.title}>
                    <h2>Sign In to your account</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <form onSubmit={signIn} className={style.form}>
                    <div className={style.inputdiv}>
                    <input type="email" name="email" placeholder="Email or Username" />
                    <input type="password" name="password" placeholder="Password"/>
                    <span>Forgot Password?</span>
                    <button type="submit">Login</button>
                    <div className={style.create}>
                        <span>Dont have an account? </span>
                        <Link href="#"> Create Account</Link>
                    </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default SignIn;