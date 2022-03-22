import React, { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import dataList from "./cards-data.json";

function Cards() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  const filterData = (e) => {
    let find = e.target.value;
    setSearchText(find);
    const newFilter = data.filter((item) => {
      return item.text.toLowerCase().includes(find.toLowerCase());
    });

    if (find === "") {
      setData(dataList);
    } else {
      setData(newFilter);
    }
  };

  var value = data.map((item) => {
    return <CardItem key={item.id} item={item} />;
  });

  return (
    <div className="p-4 bg-white">
      <h1 className="text-center m-3">Most Visited Places..!</h1>
      <div className="text-center m-3 w-100">
        <input
          type="text"
          placeholder="Type to search..."
          value={searchText}
          onChange={filterData}
        />
      </div>
      <div className="clearboth"></div>
      <div className="text-center w-100 text-muted">
        {data.length === 0 && <span>No records found to display!</span>}
      </div>
      <div className="row m-2">{value}</div>
    </div>
  );
}

export default Cards;
