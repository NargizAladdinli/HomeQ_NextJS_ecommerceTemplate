import { useContext, useEffect, useState } from "react";
import style from "./_faq.module.scss"

const Faqs = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const faqFetch = async () => {
      const req = await fetch(
        "https://json-server-tan-kappa.vercel.app/faqhomeq"
      );
      const res = await req.json();
      setQuestions(res);
    };
    faqFetch();
  }, []);

 const [select, setSelect] = useState(null);
 const toggle = (i) => {
    if(setSelect == i) {
        return setSelect(null)
    }
    setSelect(i)
 }

  return (
    <section className={style.faq}>
      <div style={{ maxWidth: "720px" }} className="container">
        <div className={style.acordion}>
          {questions.map((item, i) => {
             const { id, questions, answer } = item;
            return (
              <div key={id}  className={style.down}>
                <div className={style.click} onClick={() => toggle(i)}>
                  <h4 className={select === i ? style.orange : style.black}>{questions}</h4>
                  <span>{select === i ? "-" : "+"}</span>
                </div>
                <div className={select == i ? style.open : style.close}>
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Faqs;
