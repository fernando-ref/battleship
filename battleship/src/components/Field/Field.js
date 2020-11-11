import './Field.css';

import Cell from '../Cell/Cell';
import React from 'react';

import {GameContext} from '../../context/GameContext';


class Field extends React.Component{

  render(){

    const cells = this.context.shots.map((shot)=>

    <Cell data={shot} key={`${shot.x} ${shot.y}`} fire={this.context.fire} />
    
    );

  return (
    <div className="field">
        {cells}
    </div>
  )
  }

}

Field.contextType = GameContext;

export default Field;