import { useState, useEffect } from "react";
import { DailyCO2Info } from "./assets/data";
import axios from "axios";
import "./App.css";

export default function App() {
  const [todaysData, setTodaysData] = useState<DailyCO2Info | undefined>(
    undefined
  );

  useEffect(() => {
    fetchCO2Data();
  }, []);

  async function fetchCO2Data() {
    const response = await axios({
      method: "get",
      url: "https://global-warming.org/api/co2-api",
      withCredentials: false,
    });
    const bigData = response.data.co2;
    console.log(bigData);
    setTodaysData(bigData[bigData.length - 1]);
  }

  return (
    <div className="App">
      <h1>{todaysData.cycle}</h1>
    </div>
  );
}
