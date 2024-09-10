import React from "react";

const Section = (props) => {
  return (
    <section>
      <p>Возраст: {props.age}</p>
      <button onClick={() => props.changeName("Эрзат")}>Новое имя!</button>
    </section>
  );
};

export default Section;
