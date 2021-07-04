import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  const removeAll = () => {
    setPeople([]);
  };
  const reloadData = () => {
    setPeople(data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays remaining</h3>
        <List people={people}></List>
        {people.length > 0 ? (
          <button
            onClick={() => {
              removeAll();
            }}
          >
            Clear All
          </button>
        ) : (
          <button
            onClick={() => {
              reloadData();
            }}
          >
            Reload Data
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
