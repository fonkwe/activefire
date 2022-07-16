import React from 'react';
import './index.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MapContainer from '../components/MapContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <div className="M-style">
             <MapContainer height={1400} width={1400} />
        </div>
        
     </div>
    )
  }
}

export default App;
