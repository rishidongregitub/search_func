import { FaSearch } from "react-icons/fa";
import "./Searchbar.css";
import { useState } from "react";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search..."
          value={input}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Searchbar;
