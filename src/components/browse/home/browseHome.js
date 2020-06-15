import React from "react";
import "./browseHome.scss";
import Navbar from "../../main/navbar/navbar";
function BrowseHome() {
  const category = [
    {
      title: "Platform",
      values: [
        { id: 1, name: "PS4" },
        { id: 2, name: "XBOX" },
        { id: 3, name: "PC" },
      ],
      id: 1,
    },
    {
      title: "Genre",
      values: [
        { id: 1, name: "RPG" },
        { id: 2, name: "Racing" },
        { id: 3, name: "Horror" },
      ],
      id: 2,
    },
  ];

  return (
    <React.Fragment>
      <Navbar color={"#29282f"} />
      <div className="browseHome">
        <div className="filter">
          <div className="box">
            {category.map((i) => {
              return (
                <div className={i.title}>
                  <h5>{i.title}</h5>
                  <ul>
                    {i.values.map((j) => {
                      return (
                        <li>
                          <input
                            class="styled-checkbox"
                            id={`styled-checkbox-${i.id}-${j.id}`}
                            type="checkbox"
                            value={`value${j.id}`}
                          />
                          <label for={`styled-checkbox-${i.id}-${j.id}`}>
                            {j.name}
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="showcase"></div>
      </div>
    </React.Fragment>
  );
}

export default BrowseHome;
