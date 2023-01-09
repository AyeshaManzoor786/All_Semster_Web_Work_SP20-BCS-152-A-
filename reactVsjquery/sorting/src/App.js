import React from "react";
// import "./App.css";

function App() {
  const [persons, setPerson] = React.useState([
    "Ayesha",
    "Diya",
    "Sheeza",
    "Aleena",
  ]);
  return (
    <div className="App">
      <button
        onClick={() => {
          let ps = [...persons];
          ps.sort();
          setPerson(ps);
        }}
      >
        Test Sort
      </button>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
