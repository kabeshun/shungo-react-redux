import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <Dropdown
      options={options}
      selected={selected}
      onSelectedChange={setSelected}
    />
  );
};

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

export default App;
