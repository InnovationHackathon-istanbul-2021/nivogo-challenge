import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
// import shoe_Icon from "./images/shoe_Icon.png";
// import database_Icon from "./images/database_Icon.png";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="homePage">
      <header className="homePage--header">
        {/* <img src={shoe_Icon} className="shoe-Icon" alt="logo" /> */}
        <button
          class="btn btn-accent btn-lg mb-24"
          onClick={() => navigate("/check-the-shoe")}
        >
          Check the shoe
        </button>

        {/* <img src={database_Icon} className="database-Icon" alt="logo" /> */}
        <button
          class="btn btn-accent btn-lg"
          onClick={() => navigate("/check-database")}
        >
          Check database
        </button>
      </header>
    </div>
  );
}
export default Home;
