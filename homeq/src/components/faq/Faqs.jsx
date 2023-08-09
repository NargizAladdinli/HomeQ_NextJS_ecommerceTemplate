import { useEffect, useState } from "react";

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
                    {questions.map((item,i) => {
                        return(
                            salam
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Faqs;