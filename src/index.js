import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDdFHWlkcbT3wW3e_p_AlV-xHUYH8AcJGA';

// Class Component
// Downwards data flow: Most parent component in the app
// should be responsible for fetching data
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    // Youtube Search Function
    YTSearch({key: API_KEY, term: 'cats'}, function(videos) {
      // Callback function returns a list of videos
      this.setState({ videos });
      // this.setState({ videos: videos });
      // console.log(data);
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

// Function Component
// const App = function() { //const App = () => {}
//   return (
//     <div>
//       <SearchBar/>
//     </div>
//   );
// }

// Create an instance of App, use <App></App> or <App />
// Take this component's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
