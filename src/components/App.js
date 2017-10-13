import React from 'react';

import Search from './Search';
import Articles from './Articles';

import { ARTICLES } from '../constants/articles';

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const applySearchTerm = searchTerm => () => ({
  searchTerm,
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    const { value } = event.target;

    this.setState(applySearchTerm(value));
  }

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <Search value={searchTerm} onSearch={this.onSearch}>
          <p>Search</p>
        </Search>

        <Articles articles={ARTICLES.filter(applyFilter(searchTerm))} />

        <p>Found in <a href="https://roadtoreact.com/">the Road to learn React</a></p>
      </div>
    );
  }
}

export default App;
