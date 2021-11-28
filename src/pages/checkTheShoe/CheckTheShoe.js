import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkTheShoe.css";
import camera from "./images/camera.png";
import barcode from "./images/barcode.png";
import home from "../../home.png";

function CheckTheShoe() {
  let navigate = useNavigate();
  return (
    <div className="checkTheShoe">
      <header className="checkTheShoe--header">
        <h1 className="checkTheShoe--title mb-16">Check The Shoe</h1>
        <div className="flex flex-wrap flex-col justify-around box-content">
          <div>
            <img
              src={barcode}
              className="scan_Barcode mb-12 example w-full"
              alt="logo"
            />
            <button
              class="btn btn-accent btn-lg mb-12 w-full"
              onClick={() => navigate("/scanning-barcode")}
            >
              Upload Barcode
            </button>
          </div>
          <div className="flex flex-wrap justify-around box-content">
            <div>
              <img
                src={camera}
                className="camera mb-12 example w-full"
                alt="logo"
              />
              <button
                class="btn btn-accent btn-lg w-full"
                onClick={() => navigate("/")}
              >
                Scan Image
              </button>
            </div>
          </div>
        </div>
        <div className="flex content-center mt-8">
          <img
            src={home}
            className="camera mb-12 example w-full"
            style={{ width: "4rem" }}
            alt="home"
            onClick={() => navigate("/")}
          />
        </div>
      </header>
    </div>
  );
}
export default CheckTheShoe;
