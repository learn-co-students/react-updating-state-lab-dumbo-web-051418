// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component {
  state = { errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }

  bitrateClickHandler = () => {
    this.setState((previousState) => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }
    })

  }

  resolutionClickHandler = () => {
    this.setState((previousState) => {
      return {
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClickHandler}></button>
        <button className="resolution" onClick={this.resolutionClickHandler}></button>
      </div>
    )
  }
}

export default YouTubeDebugger

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.
// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.
