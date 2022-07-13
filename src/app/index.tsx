import React from 'react';
import './index.css';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MapContainer from '../components/Map';

function App() {
  return (
    <div className="App">
       <NavBar />
       <Header />
       <MapContainer height={500} width={500} />
    </div>
  );
}

export default App;
