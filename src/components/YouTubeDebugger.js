// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  changeBitrate = (event) => {
    let newMetaData = {...this.state};
    newMetaData.settings.bitrate = 12;
    this.setState({
      ...newMetaData,
    });
  }

  changeResolution = (event) => {
    let newMetaData = {...this.state};
    newMetaData.settings.video.resolution = "720p";
    this.setState({
      ...newMetaData,
    });
  }

  render(){
      return (
        <div>
          <button className='bitrate' onClick={this.changeBitrate.bind(this)}>Bitrate</button>
          <button className='resolution' onClick={this.changeResolution.bind(this)}>Resolution</button>
        </div>
      );
  }
}
