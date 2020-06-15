import React from "react";

function Latest_Mobile({ data }) {
  return (
    <div className="card-list-mobile">
      {data?.map((game) => {
        return (
          <div className="card" key={game.id}>
            <h2>{game.name}</h2>
            <img
              src={require(`../../../assets/${game.name}.jpg`)}
              alt={game.name}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default Latest_Mobile;
