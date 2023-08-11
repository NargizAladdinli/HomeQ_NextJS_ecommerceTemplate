import { useEffect, useState } from "react";
import Faq from "./Faq";

const Faqs = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const faqFetch = async () => {
            const req = await fetch('https://json-server-tan-kappa.vercel.app/faqhomeq');
            const res = await req.json();
            setQuestions(res);
        };
        faqFetch();
    }, [])


    return(
        <section className="">
            <div className="container">
                <div className="accordion">
                    {questions.slice(0,1).map((item,i) => {
                        return(
                            <Faq item={item}/>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Faqs;