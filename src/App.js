import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/NavBar'
import Search from './components/search/Search'
// import ImageResults from './components/image-result/ImageResult'
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar/>
          <Search/>
{/* <ImageResults/> */}
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
