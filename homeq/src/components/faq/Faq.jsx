const Faq = ({ item }) => {
  const { id, questions, answer } = item;
  return (
    <div key={id}>
      <div>
        <h4>{questions}</h4>
        <span>+</span>
      </div>
      <div>
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default Faq;
