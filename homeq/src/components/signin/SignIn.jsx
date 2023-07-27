import style from "./_signin.module.scss";

const SignIn = () => {
    return(
        <section className={style.sign}>
            <div className="container">
                <div className={style.title}>
                    <h2>Sign In to your account</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
                <form className={style.form}>
                    <div className={style.inputdiv}>
                    <input type="email" name="email" placeholder="Email or Username" />
                    <input type="password" name="password" placeholder="Password"/>
                    </div>
                    <div>
                    <span>Forgot Password?</span>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default SignIn;