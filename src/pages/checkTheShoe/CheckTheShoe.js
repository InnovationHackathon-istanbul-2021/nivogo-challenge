import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkTheShoe.css";
import camera from "./images/camera.png";
//import id_code from "./images/id_code.png";
import barcode from "./images/barcode.png";

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
              onClick={() => navigate("/scan-barcode")}
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
      </header>
    </div>
  );
}
export default CheckTheShoe;
