import React, { Component } from "react";

class Coin extends Component {
    render(){
        return <p>I'm {this.props.face}</p>
    }
}

export default Coin