import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <SolarSystem />
        <Missions className="Missions" />
        <MissionCard className="MissionCard" />
      </main>
    );
  }
}

export default App;
