import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

// import axios from 'axios';
// import GifList from './components/GifList';
// import GifModal from './components/GifModal';
// import SearchBar from './components/SearchBar';
// import './styles/app.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       gifs: [],
//       selectedGif: null,
//       modalIsOpen: false
//     }

//     this.handleTermChange = this.handleTermChange.bind(this);
//   }

//   openModal(gif) {
//     this.setState({
//       modalIsOpen: true,
//       selectedGif: gif
//     });
//   }

//   closeModal() {
//     this.setState({
//       modalIsOpen: false,
//       selectedGif: null
//     });
//   }

//   handleTermChange(term) {
//     const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=8`;

//     axios.get(url)
//     .then(res => {
//       this.setState({ gifs: res.data.data })
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar onTermChange={term => this.handleTermChange(term)} />
//         <GifList gifs={this.state.gifs} onGifSelect={selectedGif => this.openModal(selectedGif) } />
//         <GifModal modalIsOpen={this.state.modalIsOpen}
//                   selectedGif={this.state.selectedGif}
//                   onRequestClose={ () => this.closeModal() } />
//       </div>
//     );
//   }
// }


// ReactDOM.render(<App />, document.getElementById('root'));
