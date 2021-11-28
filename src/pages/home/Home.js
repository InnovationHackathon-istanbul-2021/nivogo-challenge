import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import shoe_Icon from "./images/shoe_Icon.png";
import database_Icon from "./images/database_Icon.png";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="homePage">
      <header className="homePage--header">
        <img src={shoe_Icon} className="object-contain w-3/12 lg:w-1/12" alt="logo" />
        <button
          class="btn btn-accent btn-lg mb-24 w-4/12 text-xs lg:w-1/12 lg:text-xs "
          onClick={() => navigate("/check-the-shoe")}
        >
          Check the shoe
        </button>

        <img src={database_Icon} className="object-contain w-3/12 lg:w-1/12 mb-5" alt="logo" />
        <button
          class="btn btn-accent btn-lg mb-24 w-4/12 text-xs lg:w-1/12 lg:text-xs"
          onClick={() => navigate("/access-database")}
        >
          Access database
        </button>
      </header>
    </div>
  );
}
export default Home;
