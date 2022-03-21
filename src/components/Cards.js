import React, { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import dataList from "./cards-data.json";

function Cards() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  // exclude column list from filter
  const excludeColumns = ["id", "color"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
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
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="clearboth"></div>
      {data.length === 0 && <span>No records found to display!</span>}
      <div className="row m-2">{value}</div>
    </div>
  );
}

export default Cards;
