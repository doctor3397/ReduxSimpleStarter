import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDdFHWlkcbT3wW3e_p_AlV-xHUYH8AcJGA';

// Create a new component. This component should produce some HTML
const App = function() { //const App = () => {}
  return <div>Hi!</div>;
}

// Create an instance of App, use <App></App> or <App />
// Take this component's genrated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
