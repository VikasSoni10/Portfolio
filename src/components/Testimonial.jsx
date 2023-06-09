import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonailCard
          name={"Abhishek"}
          feedback={"Your frontend development skills are awesome."}
        />

        <TestimonailCard
          name={"Elon Musk"}
          feedback={"The most passionate coder I have ever seen."}
        />

        <TestimonailCard
          name={"Bill Gates"}
          feedback={"Great, You should be the next CEO of Microsoft."}
        />
      </section>
    </div>
  );
};

const TestimonailCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="user"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
