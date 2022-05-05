import React, { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import "./Home.css";
import Topbar from "../../components/Topbar";
import FilterCheckbox from "../../components/FilterCheckbox";
import Card from "../../components/Card";

export default function Home() {
  const [allAirlineData, setAllAirlineData] = useState([{}]);
  const [checked, setChecked] = useState([]);
  const [airlineData, setAirlineData] = useState([{}]);

  async function getAllAirlineData() {
    const data = await fetchJsonp(
      "https://www.kayak.com/h/mobileapis/directory/airlines/homework",
      {
        jsonpCallback: "jsonp"
      }
    );
    const json = await data.json();
    setAllAirlineData(json);
    setAirlineData(json);
  }

  useEffect(() => {
    try {
      getAllAirlineData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (checked.length === 0) setAirlineData(allAirlineData);
    else
      setAirlineData(
        allAirlineData.filter((x) => checked.includes(x.alliance))
      );
  }, [checked, allAirlineData]);

  return (
    <div className="homepage">
      <Topbar />
      <div className="container">
        <h1 className="heading">Airlines</h1>
        <div className="filter-section">
          <div className="filter-section-heading"> Filter by alliances</div>
          <div className="filter-checkbox-section">
            <FilterCheckbox
              id="OW"
              name="Oneworld"
              checked={checked}
              setChecked={setChecked}
            />
            <FilterCheckbox
              id="ST"
              name="Sky Team"
              checked={checked}
              setChecked={setChecked}
            />
            <FilterCheckbox
              id="SA"
              name="Star Alliance"
              checked={checked}
              setChecked={setChecked}
            />
          </div>
        </div>
        <div className="card-section">
          {airlineData.map((data, i) => {
            return <Card key={i} info={data} />;
          })}
        </div>
      </div>
    </div>
  );
}
