import React from 'react'
import './styles.css'

import { observer } from 'mobx-react'
import { Paper, MenuItem } from 'material-ui'
import Chat from 'material-ui/svg-icons/communication/chat'
import MailOutline from 'material-ui/svg-icons/communication/mail-outline'

import { ChatStore, CurrentChat } from '../../stores/CommStore'

const ChatMenu = observer(class ChatMenu extends React.Component {
  render () {
    let res = []
    for (let i=0; i<ChatStore.length; i++) {
      res.push(<MenuItem
                key={ChatStore[i].id}
                primaryText={ChatStore[i].name}
                leftIcon={ChatStore[i].newMsg ? <Chat /> : <MailOutline />}
                onClick={() => {
                  CurrentChat.id = ChatStore[i].id
                  ChatStore[i].newMsg = false
                }}
              />)
    }

    return (
      <div>
        <Paper className="chatMenu">
          {res}
        </Paper>
      </div>
    )
  }
})

export default ChatMenu
