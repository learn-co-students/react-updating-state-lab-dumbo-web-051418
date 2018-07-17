// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  state = {timesClicked: 0}

  incrementTimesClicked = () => {
    this.setState((prevState)=>{
      return {
          timesClicked: prevState.timesClicked + 1
      }
    }, (newState)=>{console.log(this.state.timesClicked)})
  }

  render() {
    return (
      <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
    )
  }

}
