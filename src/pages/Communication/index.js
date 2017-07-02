import React from 'react'
import './styles.css'

import ChatMenu from '../../components/ChatMenu'
import ChatBox from '../../components/ChatBox'
import Slide from '../../components/Slide'

export default class Communication extends React.Component {
  render () {
    return (
      <Slide>
        <h1 className='headline'>Communication</h1>
        <div className='chatContainer'>
          <ChatMenu />
          <ChatBox />
        </div>
      </Slide>
    )
  }
}
