import React from "react"
import { useNavigate } from "react-router-dom"
import "./scanningBarcode.css"
import scanning_Bar2 from "./images/scanning_Bar2.jpg"
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

function ScanningBarcode() {
  let navigate = useNavigate()
  const [ data, setData ] = React.useState('Not Found');

  return (
    <div className="scanningBarcode">
      <header className="scanTheBarcode--header space-y-12">
        <div>
          <h1 className="text-6xl text-black mt-14">Scan the barcode</h1>
        </div>
        <div className="flex justify-center align-middle items-center flex-col">
        <BarcodeScannerComponent
        width={400}
        height={300}
        className="mb-5"
        onUpdate={(err, result) => {
          if(data === 'Not Found' && data !== result){
          if (result) setData(result.text)
          }
        }}
      />
          <input
            type="text"
            placeholder="Type Barcode..."
            value={data}
            className="input mt-5 input-lg text-center bg-gray-200 text-black"
          />
                        <img
            src={scanning_Bar2}
            alt="Scanning Barcode"
            className="rounded-lg w-6/12 lg:w-5/12 py-5"
          />
        </div>
        <div className="flex items-center flex-col my-10 w-full">
          <button className="btn btn-primary btn-md mb-12 w-4/12 text-xs lg:w-6/12 lg:text-xs" onClick={() => {}}>
            Check
          </button>
          <button className="btn btn-secondary btn-md mb-24 w-4/12 text-xs lg:w-6/12 lg:text-xs" onClick={() => {}}>
            Upload Image
          </button>
        </div>
      </header>
    </div>
  )
}
export default ScanningBarcode
