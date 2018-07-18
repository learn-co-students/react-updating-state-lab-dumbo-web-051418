// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      timesClicked: 0
    }
  }

  incrementClick = () => {
    this.setState((prevState, props) => ({
      timesClicked: prevState.timesClicked + 1
    })
  )}

  render() {
    return (
      <button onClick={this.incrementClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
