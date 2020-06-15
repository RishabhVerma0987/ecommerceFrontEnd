import React from "react";
import "./browseHome.scss";
import Navbar from "../../main/navbar/navbar";
function BrowseHome() {
  return (
    <React.Fragment>
      <Navbar color={"#29282f"} />
      <div className="browseHome">
        <div className="filter">
          <div className="box">
            <div className="platform">
              <h5>Platform</h5>
              <ul>
                <li>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-1-1"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-1-1">Checkbox</label>
                </li>
              </ul>
            </div>
            <div className="genre">
              <h5>Genre</h5>
              <ul>
                <li>
                  <input
                    class="styled-checkbox"
                    id="styled-checkbox-2-1"
                    type="checkbox"
                    value="value1"
                  />
                  <label for="styled-checkbox-2-1">Checkbox</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="showcase"></div>
      </div>
    </React.Fragment>
  );
}

export default BrowseHome;
