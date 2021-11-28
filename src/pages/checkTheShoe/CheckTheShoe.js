import React from "react"
import { useNavigate } from "react-router-dom"
import "./checkTheShoe.css"
import camera from "./images/camera.png"
import barcode from "./images/barcode.png"

function CheckTheShoe() {
  let navigate = useNavigate()
  return (
    <div className="checkTheShoe">
      <header className="checkTheShoe--header">
        <h1 className="text-black text-6xl mb-16">Check The Shoe</h1>
        <div className="flex flex-wrap flex-col justify-around box-content">
          <div>
            <img
              src={barcode}
              className="object-contain w-8/12 lg:w-12/12 mx-auto mb-5"
              alt="logo"
            />
            <button
              class="btn btn-accent btn-lg mb-24 w-8/12 text-xs lg:w-8/12 lg:text-xs"
              onClick={() => navigate("/scanning-barcode")}
            >
              Upload Barcode
            </button>
          </div>
          <div className="flex flex-wrap justify-around box-content">
            <div>
              <img
                src={camera}
                className="object-contain w-8/12 lg:w-12/12 mx-auto mb-5"
                alt="logo"
              />
              <button
                class="btn btn-accent btn-lg mb-24 w-8/12 text-xs lg:w-8/12 lg:text-xs"
                onClick={() => navigate("/")}
              >
                Scan Image
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
export default CheckTheShoe
