import React from "react";
import { useNavigate } from "react-router-dom";

function ManualSearch() {
  let navigate = useNavigate();
  return (
    <div className="accessDatabase">
      <header className="accessDatabase--header">
        <h1 className="accessDatabase--title mb-16">Access Database</h1>
        <div className="flex flex-wrap flex-col justify-around box-content">
          <div>
          </div>

          <button
            className="btn btn-accent btn-lg mb-12"
            onClick={() => navigate("/manual-search")}
          >
            Manual Search
          </button>
        </div>
        <div className="flex flex-wrap flex-col justify-around box-content">
          <div>
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
export default ManualSearch;
