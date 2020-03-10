import React from "react";

import Search from "./Search";
import Articles from "./Articles";

import { ARTICLES } from "../constants/articles";

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Search value={searchTerm} onSearch={handleSearch}>
        <p>Search</p>
      </Search>

      <Articles articles={ARTICLES.filter(applyFilter(searchTerm))} />
    </div>
  );
};

export default App;
