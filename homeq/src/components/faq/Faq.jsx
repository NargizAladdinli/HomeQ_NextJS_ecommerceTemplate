const Faq = ({item}) => {
    const {id, questions, answer} = item;
    return(
        <div key={id}>
            <div>{questions}</div>
        </div>
    )
}
export default Faq;

