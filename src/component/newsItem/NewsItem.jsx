import React from "react";
import image from "./img.png";

export default function NewsItem({ title, description, url, src }) {
  let titleCart = title.slice(0, 40) + " .....";
  let DescCart = description.slice(0, 100) + " .....";

  return (
    <div
      className="card bg-dark text-light d-inline-block p-2 m-3 "
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "330px" }}
        className="card-img-top"
        alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{titleCart}</h5>
        <p className="card-text">
          {DescCart ? DescCart : "Sorry for description not available"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
