import React, { Component } from 'react';
// const Component = React.Component;

// Function component
// const SearchBar = () => {
//   return <input/> // React.createElement
// }

// Class component
class SearchBar extends React.Component {
  // Must define a render function and return JSX
  render() {
    // Pass to the element we want to monitor
    return <input onChange={this.onInputChange} />;
    // return <input onChange={ event => console.log(event.target.value)} />
  }

  // Create an Event Handler
  onInputChange(event) {
    // console.log(event);
    // console.log(event.target.value);
  }
}

export default SearchBar;
