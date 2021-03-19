import React, { Component } from "react";
import heads from "./heads.png"
import tails from "./tails.png"

class Coin extends Component {
    render(){
        console.log(this.props)
        return (
            this.props.face === "heads"
            ? <img src={heads} alt="Two Euro coin: heads - Ireland's harp" />
            : <img src={tails} alt="Two Euro coin: tails"/>
        )
    }
}

export default Coin