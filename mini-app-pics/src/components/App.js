import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit (term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 
          'Client-ID 27656bf92ea27bab5cf77c739c662b56adf16de4c86fea61104353d2fc7ea994'
      }
    });

    console.log(response.data.results)

  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}><SearchBar onSubmit={this.onSearchSubmit}/></div>
    )
  }

};

export default App;