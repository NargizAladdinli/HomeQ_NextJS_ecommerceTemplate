import style from "./_contact.module.scss";

const Send = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="row m-0">
      <div className="col-12 m-auto py-5 px-3">
        <div className={style.send}>
            <h4>Get a Quote</h4>
            <form onSubmit={handleSubmit} action="">
                <div className={style.inputs}>
                    <input className={style.inputtype} type="text"  placeholder="Your Name"/>
                    <input className={style.inputtype} type="email" placeholder="Your Email"/>
                </div>
                <div className={style.inputs}>
                    <select className={style.inputtype} name="" id="">
                        <option value="">salam</option>
                        <option value="">salam</option>
                        <option value="">salam</option>
                        <option value="">salam</option>
                    </select>
                    <input className={style.inputtype} type="phone" placeholder="Your Phone Number"/>
                </div>
                <div className={style.inputs}>
                    <textarea className={style.inputtype} name="" id="" cols="30" rows="10" placeholder="Enter Message"></textarea>
                </div>
                <div className={style.inputs}>
                    <input type="checkbox" />
                    <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </span>
                </div>
                <div className={style.btninit}>
                    <button type="submit">Get an Free Service</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};
export default Send;
