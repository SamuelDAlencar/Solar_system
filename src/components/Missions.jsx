import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../App.css';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="Missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            key={ name }
          />
        ))}
      </div>
    );
  }
}
