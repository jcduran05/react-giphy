import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=8`;

    axios.get(url)
    .then(res => {
      this.setState({ gifs: res.data.data })
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
