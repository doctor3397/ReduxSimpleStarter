import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDdFHWlkcbT3wW3e_p_AlV-xHUYH8AcJGA';

// Class Component
// Downwards data flow: Most parent component in the app
// should be responsible for fetching data
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("cats");
  }

  // Youtube Search Function
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // Callback function returns a list of videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  // Passing the videos data(props) from the App(parent) component into the VideoList(child) component
  // props: availabe anywhere in a class component by calling this.props
  // Pass onVideoSelect( callback fucntion) from App -> VideoList -> VideoListItem
  render() {
    // use debounce to call videoSearch every 300ms
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
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
