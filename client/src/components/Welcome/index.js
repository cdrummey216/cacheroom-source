import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RoomLink from 'components/RoomLink'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roomUrl: `https://cmd317-encrypted-web-app.herokuapp.com/${props.roomId}`,
    }
  }

  render() {
    return (
      <div>
        <div>
          <span class="project_name">CacheRoom</span> is like <a href="https://pastebin.com" target="_blank" rel="noopener noreferrer">Paste.bin</a> for chatrooms. Exchange encrypted files & messages anonymously using socket.io and the web cryptography API from Mozilla. Here are some key features:
          <ul className="native">
            <li>Chat history is stored in a participant's browser and is erased when the last participant leaves the room.</li>
            <li>Messages are encrypted using a combination of asymmetric encryption (RSA-OAEP), symmetric session keys (AES-CBC) and signing keys (HMAC)</li>
            <li>Support on all modern browsers (Chrome, Firefox, Safari, Safari iOS, Android)</li>
            <li>Slash commands (/nick, /me, /clear)</li>
            <li>Room owners can lock the room, preventing anyone else from joining</li>
            <li>Send files up to 4 MB</li>
          </ul>
        </div>
        <br />
        <p>Others can join this room using the following URL:</p>
        <RoomLink roomId={this.props.roomId} />
        <div className="react-modal-footer">
          <button className="btn btn-primary btn-lg" onClick={this.props.close}>Ok</button>
        </div>
      </div>
    )
  }
}

Welcome.propTypes = {
  roomId: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
}

export default Welcome
