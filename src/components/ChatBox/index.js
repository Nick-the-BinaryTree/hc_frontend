import React from 'react'
import './styles.css'

import { Paper, TextField } from 'material-ui'
import { observer } from 'mobx-react'
import $ from 'jquery'

import { ChatStore, CurrentChat } from '../../stores/CommStore'


const ChatBox = observer(class ChatBox extends React.Component {
  handleKey (e) {
    if (e.charCode === 13) {
      ChatStore[CurrentChat.id].log.push($('#sendField').val())
      $('#sendField').val('')
      $('.logText').stop().animate({ scrollTop: $('.logText')[0].scrollHeight }, 1000)
    }
  }

  render () {
    const data = ChatStore[CurrentChat.id].log
    let res = []

    for (let i = 0; i < data.length; i++) {
      res.push(<p key={i}>{data[i]}</p>)
    }

    return (
      <div>
        <Paper className='chatBox'>
          <div className='innerChatBox'>
            <div className='logText'>
              {res}
            </div>
            <TextField
              id='sendField'
              hintText='Send a message'
              fullWidth={true}
              onKeyPress={this.handleKey}
            />
          </div>
        </Paper>
      </div>
    )
  }
})

export default ChatBox
