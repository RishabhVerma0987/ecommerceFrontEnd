import React, { useState, useEffect } from "react";
import "./browseHome.scss";
import Navbar from "../../main/navbar/navbar";
import AnimateHeight from "react-animate-height";
import { useDispatch, useSelector } from "react-redux";
import { ps4Games } from "../../../store/actions/index";
import Card from "../../main/resuables/card";
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
  useEffect(() => {
    dispatch(ps4Games());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.ps4GamesReducer);

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
        <div className="showcase">
          {games?.map((i) => {
            return (
              <Card
                gameName={i.game_name}
                imageName={i.image_name}
                price={i.price}
                rating={i.rating}
                key={i.id}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BrowseHome;
