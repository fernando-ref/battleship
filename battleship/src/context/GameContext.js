import React from 'react';

export const GameContext = React.createContext({
});


export class GameContextProvider extends React.Component {

    constructor(props) {
        super(props);

        let shots = [];

        for (let i = 0; i != 10; i++) {
            for (let j = 0; j != 10; j++) {
                shots.push({
                    x: i,
                    y: j,
                    status: null
                });
            }
        }

        this.CPUData = JSON.parse('{ "shipTypes": { "carrier": { "size": 5, "count": 1 }, "battleship": { "size": 4, "count": 1 }, "cruiser": { "size": 3, "count": 1 }, "submarine": { "size": 3, "count": 1 }, "destroyer": { "size": 2, "count": 1 } }, "layout": [ { "ship": "carrier", "positions": [[2,9], [3,9], [4,9], [5,9], [6,9]] }, { "ship": "battleship", "positions": [[5,2], [5,3], [5,4], [5,5]] }, { "ship": "cruiser", "positions": [[8,1], [8,2], [8,3]] }, { "ship": "submarine", "positions": [[3,0], [3,1], [3,2]] }, { "ship": "destroyer", "positions": [[0,0], [1,0]] } ] }');
        console.log(this.CPUData);
        this.state = {
            shots: shots,
            score:this.CPUData,
            globalPoints:0
        }

        this.fire = this.fire.bind(this);

    }

    fire(data) {
        // x * 10 + y
        console.log("Bummm!!");

        if (data.status === null) {
            const sh = this.state.shots;

            sh[data.x * 10 + data.y].status = this.existShip(data.x, data.y);

            this.setState((state, props) => ({
                ...state,
                shots: sh
            }));
        }
    }

    existShip(x, y) {

        for(const item of this.CPUData.layout){
            for(const position of item.positions){
                if(position[0] === x && position[1] === y){

                    // Update damage
                    let sc = this.state.score;
                    let damage = 0;
                    if(sc.shipTypes[item.ship].damage !== undefined)
                    {
                        damage = sc.shipTypes[item.ship].damage + 1;
                    }

                    sc.shipTypes[item.ship]={
                        ...sc.shipTypes[item.ship],
                        damage:damage
                    };

                    // Update global points
                    let globalP = this.state.globalPoints;
                    if(sc.shipTypes[item.ship].damage + 1 === sc.shipTypes[item.ship].size){
                        globalP++;
                    }

                    this.setState((state, props) => ({
                        ...state,
                        score:sc,
                        globalPoints:globalP
                    }));

                    return true;
                }
            }
        }
        return false;
    }

    render() {
        return (
            <GameContext.Provider
                value={{
                    shots: this.state.shots,
                    fire: this.fire,
                    globalPoints:this.state.globalPoints,
                    navy:this.state.score.shipTypes
                }}>
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export const GameContextConsumer = GameContext.Consumer;