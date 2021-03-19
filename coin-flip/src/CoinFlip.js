import React, {Component} from "react";
import Coin from "./Coin";

class CoinFlip extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentCoinFace: "heads",
            count: 0,
            countHeads: 0,
            countTails: 0
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(){
        let value = Math.round(Math.random())
        let face = value ? "heads" : "tails";
        this.setState((currentState) => ({
            currentCoinFace: face,
            count: currentState.count + 1,
            countHeads: face === "heads" ? currentState.countHeads + 1 : currentState.countHeads,
            countTails: face === "tails" ? currentState.countTails + 1 : currentState.countTails,
        }
        ))
    }

    render() {
        return(
            <div className="CoinFlip">
                <h1>Let's Flip A Coin!</h1>
                <Coin face={this.state.currentCoinFace}/>
                <button onClick={this.flipCoin}>Flip the coin!</button>
                <p>Out of {this.state.count} coin flips, there have been {this.state.countHeads} heads and {this.state.countTails} tails.</p>
            </div>
        )
    }
}

export default CoinFlip