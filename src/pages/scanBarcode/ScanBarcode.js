import React from "react";
import { useNavigate } from "react-router-dom";
import "./scanBarcode.css";
import sampleShoe from "./images/sampleShoe.jpg";

function ScanBarcode() {
  let navigate = useNavigate();

  return (
    <div className="scanTheBarcode">
      <header className="scanTheBarcode--header">
        <div>
          <img
            src={sampleShoe}
            alt="Shoe"
            classNameName="rounded-md productPhoto"
          />
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Brand Name"
            className="input input-accent input-bordered"
          />
          <input
            type="text"
            placeholder="Shoe Model"
            className="input input-accent input-bordered"
          />
          <input
            type="text"
            placeholder="Shoe Type"
            className="input input-accent input-bordered"
          />
        </div>
        <div className="flex">
          <div className="flex">
            <label className="cursor-pointer label">
              <span className="label-text text-grey-600 text-lg">Left</span>
              <input
                type="radio"
                name="opt"
                checked="checked"
                className="radio"
                value="left"
              />
            </label>
          </div>
          <div className="flex">
            <label className="cursor-pointer label">
              <span className="label-text text-grey-600 text-lg">Right</span>
              <input
                type="radio"
                name="opt"
                checked="checked"
                className="radio"
                value="right"
              />
            </label>
          </div>
        </div>
        <div className="flex items-center">
          <button className="btn btn-accent btn-lg" onClick={() => {}}>
            Cancel
          </button>
          <button className="btn btn-accent btn-lg" onClick={() => {}}>
            Check
          </button>
        </div>
      </header>
    </div>
  );
}
export default ScanBarcode;
