import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    //Get from Wikipedia
    if (!term) return;
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      if (!!data.query) {
        setResults(data.query.search);
      }
    };
    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        {result.snippet}
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
