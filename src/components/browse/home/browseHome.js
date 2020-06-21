import React, { useState, useEffect } from "react";
import "./browsehome.scss";
import Navbar from "../../main/navbar/navbar";
import AnimateHeight from "react-animate-height";
import { useDispatch, useSelector } from "react-redux";
import { fetchPS4Games } from "../../../store/actions/index";
import Card from "../../main/resuables/card";
var array = require("lodash/array");
function BrowseHome() {
  const categoryList = [
    {
      title: "Platform",
      values: [
        { id: 1, name: "PS4", checked: false },
        { id: 2, name: "XBOX", checked: false },
        { id: 3, name: "PC", checked: false },
      ],
      id: 1,
    },
    {
      title: "Genre",
      values: [
        { id: 1, name: "Action", checked: false },
        { id: 2, name: "RPG", checked: false },
        { id: 3, name: "FPS", checked: false },
        { id: 4, name: "Horror", checked: false },
        { id: 5, name: "Battle Royal", checked: false },
        { id: 5, name: "Mystery", checked: false },
      ],
      id: 2,
    },
    {
      title: "Price",
      values: [
        { id: 1, name: "Under 1000 Rs", checked: false },
        { id: 2, name: "Under 2000 Rs", checked: false },
        { id: 3, name: "Between 1000 - 2500 Rs", checked: false },
        { id: 4, name: "Above 3000 Rs", checked: false },
        { id: 5, name: "Under 4000 Rs", checked: false },
      ],
      id: 3,
    },
    {
      title: "Pegi Rating",
      values: [
        { id: 1, name: "PEGI 18+", checked: false },
        { id: 2, name: "PEGI 13+", checked: false },
        { id: 3, name: "All Ages", checked: false },
      ],
      id: 4,
    },
    {
      title: "Company",
      values: [
        { id: 1, name: "Activision", checked: false },
        { id: 2, name: "Respawn", checked: false },
        { id: 3, name: "Rockstar Games", checked: false },
        { id: 4, name: "Ubitsoft", checked: false },
        { id: 5, name: "Epic Games", checked: false },
      ],
      id: 5,
    },
    {
      title: "User Rating",
      values: [
        { id: 1, name: "1-2⭐", checked: false },
        { id: 2, name: "2-3⭐", checked: false },
        { id: 3, name: "3-4⭐", checked: false },
        { id: 4, name: "4-5⭐", checked: false },
      ],
      id: 6,
    },
  ];

  const [category, setCategory] = useState(categoryList);

  useEffect(() => {
    dispatch(fetchPS4Games());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const games = useSelector((state) => state.ps4GamesReducer);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const toggle = () => {
    if (height === 0) {
      setHeight("auto");
    } else {
      setHeight(0);
    }
  };

  const clearCategory = (value) => {
    //extract title
    let flag = 0;
    let title = "";
    for (let i = 0; i < category.length; i++) {
      let arr = category[i].values;
      if (flag === 0) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j].name === value) {
            title = category[i].title;
            flag = 1;
            break;
          }
        }
      } else {
        break;
      }
    }
    //call remove helper
    removeHelper(value, title);
  };

  const removeHelper = (value, title) => {
    let arr = array.remove(selectedCategory, (n) => {
      return n !== value;
    });
    setSelectedCategory([...arr]);

    let tempCategory = category;
    tempCategory = checkboxHelper(tempCategory, title, value, false);
    setCategory([...tempCategory]);
  };

  const checkboxHelper = (tempCategory, title, value, bool) => {
    for (let i = 0; i < tempCategory.length; i++) {
      if (tempCategory[i].title === title) {
        // console.log(tempCategory[i].title, title);

        for (let j = 0; j < tempCategory[i].values.length; j++) {
          if (tempCategory[i].values[j].name === value) {
            tempCategory[i].values[j].checked = bool;
          }
        }
      }
    }
    return tempCategory;
  };

  const onSelectCategory = (e, title) => {
    let value = e.target.value;

    let temp = selectedCategory;
    let tempCategory = category;

    if (selectedCategory.includes(value)) {
      removeHelper(value, title);
    } else {
      temp.push(value);

      tempCategory = checkboxHelper(tempCategory, title, value, true);
      setCategory([...tempCategory]);
      setSelectedCategory([...temp]);
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
                            value={j.name}
                            onChange={(e) => onSelectCategory(e, i.title)}
                            checked={j.checked}
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
                              value={j.name}
                              onChange={(e) => onSelectCategory(e, i.title)}
                              checked={j.checked}
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
          <div className="filter-options">
            <ul>
              {selectedCategory.map((i) => {
                return (
                  <li>
                    <div className="selected">
                      {i}
                      <p
                        onClick={() => clearCategory(i)}
                        style={{
                          backgroundColor: "#111113",
                          borderRadius: "100%",
                          width: "20px",
                          height: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingBottom: "5px",
                        }}
                      >
                        x
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="card-showcase">
            {games?.map((i) => {
              return (
                <Card
                  gameName={i.title}
                  imageName={i.photo}
                  price={i.price}
                  rating={i.rating}
                  key={i._id}
                  got={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BrowseHome;
