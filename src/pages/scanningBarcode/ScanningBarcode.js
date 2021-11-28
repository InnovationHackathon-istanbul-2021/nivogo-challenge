import React from "react"
import { useNavigate } from "react-router-dom"
import "./scanningBarcode.css"
import scanning_Bar2 from "./images/scanning_Bar2.jpg"

function ScanningBarcode() {
  let navigate = useNavigate()

  return (
    <div className="scanningBarcode">
      <header className="scanTheBarcode--header space-y-12">
        <div>
          <img
            src={scanning_Bar2}
            alt="Scanning Barcode"
            classNameName="rounded-md productPhoto"
          />
          {/* <div class="card bordered bg-gray-300">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250">
                </figure> 
              
        </div>  */}
        </div>
        <div>
          <input
            type="text"
            placeholder="Type Barcode..."
            className="input input-lg bg-gray-200 text-black"
          />
        </div>
        <div className="flex items-center space-x-8">
          <button className="btn btn-accent btn-lg" onClick={() => {}}>
            Check
          </button>
          <button className="btn btn-accent btn-lg" onClick={() => {}}>
            Upload Image
          </button>
        </div>
      </header>
    </div>
  )
}
export default ScanningBarcode
