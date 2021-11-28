import React, { useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";

function AccessDatabase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDOax3-UK6ZOdWAORWZXoZFugmVw2W4K0E",
    authDomain: "eros-140d7.firebaseapp.com",
    databaseURL: "https://eros-140d7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "eros-140d7",
    storageBucket: "eros-140d7.appspot.com",
    messagingSenderId: "558377699271",
    appId: "1:558377699271:web:88d7de6a9a541f50a57be2"
  };
  const [state, setState] = React.useState([]);
  const app = initializeApp(firebaseConfig);
  var databaseArray = [];
  const dbRef = ref(getDatabase(app));
  get(child(dbRef, `/`)).then((snapshot) => {
    if (snapshot.exists()) {
      setState(snapshot.val());
      state.slice(0, 100);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return (
    <div className="overflow-x-auto w-8/12 mx-auto" id="sonuc">
    <table className="table w-full">
      <thead>
        <tr>
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
        {state.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.BARKOD}</td>
              <td>{item["OPTION KODU"]}</td>
              <td>{item["ÜRÜN ÇEŞİT"]}</td>
              <td>{item["CİNSİYET"]}</td>
              <td>{item["YAŞ GRUBU"]}</td>
              <td>{item.RENK}</td>
              <td>{item["MODEL ADI"]}</td>
              <td>{item.MARKA}</td>
              <td>{item.BEDEN}</td>
              <td><img src={item["FOTO URL"]} alt="foto" width="100" height="100"/></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  );
}
export default AccessDatabase;
