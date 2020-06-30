import React from "react";
import { Link } from "react-router-dom";

function Latest_Mobile({ data }) {
  return (
    <div className="card-list-mobile">
      {data?.map((game) => {
        return (
          <div className="card" key={game._id}>
            <Link to={`/product/${game._id}`}></Link>
            <h2>{game.title}</h2>
            <img src={game.photo} alt={game.title}></img>
          </div>
        );
      })}
    </div>
  );
}

export default Latest_Mobile;
