import './Score.css';

import React from 'react';

import {GameContext} from '../../context/GameContext';

class Score extends React.Component{


  render(){
  return (
    <div className="score">
      <div>
  <div className="points">{this.context.globalPoints}</div>
        <div className="player">player 1</div>
      </div>
      <div>
        <div className="points">00</div>
        <div className="player">player 2</div>
      </div>
    </div>
  );
  }
}

Score.contextType = GameContext;

export default Score;