import React from "react";
import "./App.css";

function App() {
  const [search, setSearch] = React.useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>
        Searches for: <span className="result">{search ? search : "..."}</span>
      </p>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div className="container p-0 mb-4">
      <h1 className="mb-5">React Testing</h1>

      <label htmlFor="search" className="form-label">
        {children}
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
}

export default App;
