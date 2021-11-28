import React from "react";
import { useNavigate } from "react-router-dom";
import "./accessDatabase.css";
import manual from "./images/manual.png";
import plus_Icon from "./images/plus_Icon.png";

function AccessDatabase() {
  let navigate = useNavigate();
  return (
    <div className="accessDatabase">
      <header className="accessDatabase--header">
        <h1 className="accessDatabase--title mb-16">Access Database</h1>
        <div className="flex flex-wrap flex-col justify-around box-content">
          <div>
            <img
              src={manual}
              className="manual mb-12 example w-full"
              alt="logo"
            />
          </div>

          <button
            className="btn btn-accent btn-lg mb-12"
            onClick={() => navigate("/manuel-search")}
          >
            Manual Search
          </button>
        </div>
        <div className="flex flex-wrap flex-col justify-around box-content">
          <div>
            <img src={plus_Icon} className="plus-Icon mb-12" alt="logo" />
          </div>
          <button
            className="btn btn-accent btn-lg"
            onClick={() => navigate("/add-new-type")}
          >
            Add New Type
          </button>
        </div>
      </header>
    </div>
  );
}
export default AccessDatabase;
