import React from "react";
import Card from "./Card";
import { data } from "./data";

const Blog = () => {
  return (
    <section className="py-4 py-lg-5 container">
      <div className="row justify-content-center">
        {data.cardData.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
