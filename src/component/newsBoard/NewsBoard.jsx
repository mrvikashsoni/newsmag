import React, { useEffect, useState } from "react";
import NewsItem from "../newsItem/NewsItem";

export default function NewsBoard({ category }) {
  // create useState variable

  const [articles, setArticles] = useState([]);

  // useEffect -- past api

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9e2bc40cf2ba47d989df82b86e8a8722`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <spam className="badge bg-danger">News</spam>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}
