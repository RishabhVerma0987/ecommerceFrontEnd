import React, { useState } from "react";
import "./browseHome.scss";
import Navbar from "../../main/navbar/navbar";
import AnimateHeight from "react-animate-height";
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
    {
      title: "Platform",
      values: [
        { id: 1, name: "PS4" },
        { id: 2, name: "XBOX" },
        { id: 3, name: "PC" },
      ],
      id: 3,
    },
    {
      title: "Genre",
      values: [
        { id: 1, name: "RPG" },
        { id: 2, name: "Racing" },
        { id: 3, name: "Horror" },
      ],
      id: 4,
    },
  ];

  const [height, setHeight] = useState(0);

  const toggle = () => {
    if (height === 0) {
      setHeight("auto");
    } else {
      setHeight(0);
    }
  };

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
        <div className="filter-mobile">
          <div className="controls">
            <div className="filt" onClick={toggle}>
              <p>filter</p>
            </div>
            <div className="sort">
              <p>sort</p>
            </div>
          </div>
          <AnimateHeight
            duration={500}
            height={height} // see props documentation below
            className="menu"
          >
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
            <div className="apply">
              <button onClick={toggle}>Apply filter</button>
            </div>
          </AnimateHeight>
        </div>
        <div className="showcase"></div>
      </div>
    </React.Fragment>
  );
}

export default BrowseHome;
