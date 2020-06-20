import React from "react";

function Latest_Mobile({ data }) {
  return (
    <div className="card-list-mobile">
      {data?.map((game) => {
        return (
          <div className="card" key={game._id}>
            <h2>{game.title}</h2>
            <img src={game.photo} alt={game.title}></img>
          </div>
        );
      })}
    </div>
  );
}

export default Latest_Mobile;
