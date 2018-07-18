// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        errors: [],
        user: null,
        settings:
          { bitrate: 8,
            video:
              { resolution: '1080p' }
          }
        }
    }

  changeBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });

  }


  changeResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p',
        }
      }
    })

  }


  render() {
    return(
      <div>
        <label>{this.state.settings.bitrate}</label>
        <button className="bitrate" onClick={this.changeBitRate}>Change Bit Rate</button>

        <label>{this.state.settings.video.resolution}</label>
        <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
      </div>
    )
  }





}
export default YouTubeDebugger
