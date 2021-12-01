import React from "react";
import { useNavigate } from "react-router-dom";
import "./scanningBarcode.css";
import scanning_Bar2 from "./images/scanning_Bar2.jpg";
import javascriptBarcodeReader from "javascript-barcode-reader";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import home from "../../home.png";

function ScanningBarcode() {
  let navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "AIzaSyDOax3-UK6ZOdWAORWZXoZFugmVw2W4K0E",
    authDomain: "eros-140d7.firebaseapp.com",
    databaseURL:
      "https://eros-140d7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "eros-140d7",
    storageBucket: "eros-140d7.appspot.com",
    messagingSenderId: "558377699271",
    appId: "1:558377699271:web:88d7de6a9a541f50a57be2",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  var databaseArray = [];
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        databaseArray = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="scanningBarcode">
      <header className="scanTheBarcode--header space-y-20">
        <div>
          <img
            src={scanning_Bar2}
            alt="Scanning Barcode"
            className="rounded-md productPhoto"
          />
        </div>
        <div className="flex">
          <div>
            <input
              type="text"
              placeholder="Type Barcode Number..."
              className="input input-lg bg-gray-200 text-black"
              id="barcode"
            />
          </div>
          <button
            className="btn btn-accent btn-lg"
            onClick={(e) => {
              e.preventDefault();
              var yok = false;
              var index = 0;
              for (var db in databaseArray) {
                var databaseBarcode = databaseArray[db].BARKOD;
                databaseBarcode = databaseBarcode.toString();
                var barcode = document.getElementById("barcode").value;
                barcode = barcode.toString();
                if (databaseBarcode.includes(barcode)) {
                  yok = true;
                  index = db;
                } else {
                  yok = false;
                }
              }
              if (!yok) {
                document.getElementById("sonuc").classList.remove("hidden");
                document.getElementById(
                  "table-barcode"
                ).innerHTML = `<p>${databaseArray[index].BARKOD}</p>`;
                document.getElementById(
                  "table-option"
                ).innerHTML = `<p>${databaseArray[index]["OPTION KODU"]}</p>`;
                document.getElementById(
                  "table-cesit"
                ).innerHTML = `<p>${databaseArray[index]["ÜRÜN ÇEŞİT"]}</p>`;
                document.getElementById(
                  "table-cinsiyet"
                ).innerHTML = `<p>${databaseArray[index]["CİNSİYET"]}</p>`;
                document.getElementById(
                  "table-yas-grubu"
                ).innerHTML = `<p>${databaseArray[index]["YAŞ GRUBU"]}</p>`;
                document.getElementById(
                  "table-renk"
                ).innerHTML = `<p>${databaseArray[index].RENK}</p>`;
                document.getElementById(
                  "table-model"
                ).innerHTML = `<p>${databaseArray[index]["MODEL ADI"]}</p>`;
                document.getElementById(
                  "table-marka"
                ).innerHTML = `<p>${databaseArray[index].MARKA}</p>`;
                document.getElementById(
                  "table-beden"
                ).innerHTML = `<p>${databaseArray[index].BEDEN}</p>`;
                document.getElementById(
                  "table-foto"
                ).innerHTML = `<img src="${databaseArray[index]["FOTO URL"]}" alt="${databaseArray[index].MARKA}" />`;
              } else {
              }
            }}
          >
            Check Barcode
          </button>
        </div>

        <div className="flex items-center flex-col">
          <label
            className="
  btn btn-accent btn-lg mb-12
  "
          >
            Scan Photo
            <input
              type={"file"}
              className="hidden "
              accept={"image/*"}
              onChange={(source) => {
                if (source.target.files && source.target.files[0]) {
                  const img = URL.createObjectURL(source.target.files[0]); // set src to blob url
                  javascriptBarcodeReader({
                    image: img,
                    barcode: "ean-13",
                    // barcodeType: "interleaved"
                  })
                    .then((result) => {
                      if (result.includes("??")) {
                        alert("Invalid Barcode");
                      } else {
                        document.getElementById("barcode").value = result;
                        var yok = false;
                        var index = 0;
                        for (var db in databaseArray) {
                          var databaseBarcode = databaseArray[db].BARKOD;
                          databaseBarcode = databaseBarcode.toString();
                          var barcode =
                            document.getElementById("barcode").value;
                          barcode = barcode.toString();
                          if (databaseBarcode.includes(barcode)) {
                            yok = true;
                            index = db;
                          } else {
                            yok = false;
                          }
                        }
                        if (!yok) {
                          document
                            .getElementById("sonuc")
                            .classList.remove("hidden");
                          document.getElementById(
                            "table-barcode"
                          ).innerHTML = `<p>${databaseArray[index].BARKOD}</p>`;
                          document.getElementById(
                            "table-option"
                          ).innerHTML = `<p>${databaseArray[index]["OPTION KODU"]}</p>`;
                          document.getElementById(
                            "table-cesit"
                          ).innerHTML = `<p>${databaseArray[index]["ÜRÜN ÇEŞİT"]}</p>`;
                          document.getElementById(
                            "table-cinsiyet"
                          ).innerHTML = `<p>${databaseArray[index]["CİNSİYET"]}</p>`;
                          document.getElementById(
                            "table-yas-grubu"
                          ).innerHTML = `<p>${databaseArray[index]["YAŞ GRUBU"]}</p>`;
                          document.getElementById(
                            "table-renk"
                          ).innerHTML = `<p>${databaseArray[index].RENK}</p>`;
                          document.getElementById(
                            "table-model"
                          ).innerHTML = `<p>${databaseArray[index]["MODEL ADI"]}</p>`;
                          document.getElementById(
                            "table-marka"
                          ).innerHTML = `<p>${databaseArray[index].MARKA}</p>`;
                          document.getElementById(
                            "table-beden"
                          ).innerHTML = `<p>${databaseArray[index].BEDEN}</p>`;
                          document.getElementById(
                            "table-foto"
                          ).innerHTML = `<img src="${databaseArray[index]["FOTO URL"]}" alt="${databaseArray[index].MARKA}" />`;
                        } else {
                        }
                      }
                    })
                    .catch(console.log);
                }
              }}
            />
          </label>
          <div className="flex justify-between items-center mb-12">
            <div className="flex flex-start">
              <input
                type="text"
                placeholder="Type Shelf Info..."
                className="input input-lg bg-gray-200 text-black"
                id="shelfLocation"
              />
            </div>
            <div className="flex">
              <div className="ml-6">
                <label class="cursor-pointer label">
                  <span class="label-text text-black text-xl">Left</span>
                  <input
                    type="radio"
                    name="opt"
                    checked="checked"
                    class="radio radio-accent radio-lg"
                    value="Left"
                  />
                </label>
              </div>
              <div className="ml-6">
                <label class="cursor-pointer label">
                  <span class="label-text text-black text-xl">Right</span>
                  <input
                    type="radio"
                    name="opt"
                    checked="checked"
                    class="radio radio-accent radio-lg"
                    value="Right"
                  />
                </label>
              </div>
            </div>
          </div>
          <button className="btn btn-accent btn-xl w-full text-xl">Save</button>
          <div className="overflow-x-auto hidden" id="sonuc">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>BARKOD</th>
                  <th>OPTION KODU</th>
                  <th>ÜRÜN ÇEŞİT</th>
                  <th>CİNSİYET</th>
                  <th>YAŞ GRUBU</th>
                  <th>RENK</th>
                  <th>MODEL ADI</th>
                  <th>MARKA</th>
                  <th>BEDEN</th>
                  <th>FOTO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-sm" id="table-id"></td>
                  <th className="text-sm" id="table-barcode">
                    1
                  </th>
                  <td className="text-sm" id="table-option">
                    Cy Ganderton
                  </td>
                  <td className="text-sm" id="table-cesit">
                    Quality Control Specialist
                  </td>
                  <td className="text-sm" id="table-cinsiyet">
                    Blue
                  </td>
                  <td className="text-sm" id="table-yas-grubu">
                    Blue
                  </td>
                  <td className="text-sm" id="table-renk">
                    Blue
                  </td>
                  <td className="text-sm" id="table-model">
                    Blue
                  </td>
                  <td className="text-sm" id="table-marka">
                    Blue
                  </td>
                  <td className="text-sm" id="table-beden">
                    Blue
                  </td>
                  <td className="text-sm" id="table-foto">
                    Blue
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex content-center">
          <img
            src={home}
            className="mb-12"
            style={{ width: "4rem" }}
            alt="home"
            onClick={() => navigate("/")}
          />
        </div>
      </header>
    </div>
  );
}
export default ScanningBarcode;
