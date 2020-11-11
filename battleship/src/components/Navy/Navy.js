import React from 'react';

import './Navy.css';
import hs from '../../assets/Hit small.png';
import ms from '../../assets/Miss small.png';
import carrier from '../../assets/Carrier Shape.png';
import battleship from '../../assets/Battleship Shape.png';
import cruiser from '../../assets/Cruiser Shape.png';
import submarine from '../../assets/Submarine Shape.png';
import destroyer from '../../assets/Carrier Shape.png';
import { GameContext } from '../../context/GameContext';


class Navy extends React.Component {

  constructor(props) {
    super(props);

    this.ships = {
      carrier:carrier,
      battleship:battleship,
      cruiser:cruiser,
      submarine:submarine,
      destroyer:destroyer
    };
  }

  displayIcon(n, icon) {
    let icons = [];
    if (!isNaN(n)) {

      for (let i = 0; i != n+1; i++) {
        icons.push(<img src={icon} />);
      }
    }

    return icons;
  }

  displayNavyStatus() {

    let navy = [];

    for (let ship in this.context.navy) {
      navy.push(
        <div className="ship">
          <h3>{ship}<br /><img src={this.ships[ship]}></img></h3>
          <div>
          <p>Size:{this.displayIcon(this.context.navy[ship].size, ms)}</p>
          <p>Damage:{this.displayIcon(this.context.navy[ship].damage, hs)}</p>
          </div>
        </div>
      );
    }

    return navy;
  }

  render() {

    return (
      <div>
        {this.displayNavyStatus()}
      </div>
    );
  }
}

Navy.contextType = GameContext;

export default Navy;