// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {

    constructor(props){
        super(props);
        this.state = {
            timesClicked: 0
        }
    }

    // handleClick = () => {
    //     this.setState (
    //         previousState => {
    //             return {
    //                 timesClicked: previousState.timesClicked + 1
    //             }
    //         }
    //     )
    // }

    handleClick = () => {
        this.setState( 
            previousState => { return { timesClicked: previousState.timesClicked+ 1}}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button><br/><br/>
                {/* <h3>This Button has been clicked  times!</h3> */}
            </div>
        );
    }
}

export default DigitalClicker;