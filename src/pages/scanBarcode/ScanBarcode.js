import React from "react"
import { useNavigate } from "react-router-dom"
import "./scanBarcode.css"
import sampleShoe from "./images/sampleShoe.jpg"

function ScanBarcode() {
  let navigate = useNavigate()

  return (
    <div className="scanTheBarcode">
      <header className="scanTheBarcode--header space-y-12">
        <div>
          <img
            src={sampleShoe}
            alt="Shoe"
            classNameName="rounded-md productPhoto"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Brand Name"
            className="input input-lg bg-gray-200 text-black"
          />
          <input
            type="text"
            placeholder="Shoe Model"
            className="input input-lg bg-gray-200 text-black"
          />
          <input
            type="text"
            placeholder="Shoe Type"
            className="input input-lg bg-gray-200 text-black"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn btn-accent btn-lg" onClick={() => {}}>
            Cancel
          </button>
          <button className="btn btn-accent btn-lg" onClick={() => {}}>
            Check
          </button>
        </div>
      </header>
    </div>
  )
}
export default ScanBarcode
