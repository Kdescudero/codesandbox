import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { data } from "./data";

const checkValueList = (id, query, setQuery, data) => {
  query.map((item, key) => {
    item.preference.map((value, key2) => {
      if (value.idPreference === id) {
        query[key].preference[key2].isEnabled = true;
      }
    });
  });
  setQuery([...query]);
};

const App = () => {
  const [query, setQuery] = useState(data);

  const copy = data.slice();
  // useEffect(() => {
  //   if (data) {
  //     setQuery(data);
  //   }
  // }, []);

  console.log("Copy >>", copy);
  console.log("Data >>", data, "Query >>", query);

  return query.map((item, key) => {
    return (
      <>
        <p key={key}>{item.name}</p>
        {item.preference.map((value, key) => (
          <div key={key}>
            <input
              type="checkbox"
              name="vehicle3"
              value="Boat"
              checked={value.isEnabled}
              onClick={() =>
                checkValueList(value.idPreference, query, setQuery, data)
              }
            />
            <span>{value.name}</span> <br />
          </div>
        ))}
      </>
    );
  });
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
