import React from "react";
import NewCard from "./NewCard.tsx";
import NewsData from "../../data/newsData/news45.ts";

const News = () => {
  return (
    <section className="w-full mx-auto mb-4 p-4 xl:max-w-7xl">
        <h2 className="text-xl mb-4"> Noticias </h2>
        <div className="flex flex-wrap justify-start align-between gap-6">
          {NewsData.map((data) => (
            <NewCard {...data}/>
          ))}
        </div>
    </section>
  );
};

export default News;
