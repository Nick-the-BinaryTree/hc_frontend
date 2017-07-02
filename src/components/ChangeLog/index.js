import React from 'react'
import './styles.css'

import { observer } from 'mobx-react'

import { LogStore } from '../../stores/ResStore'

const ChangeLog = observer(class ChangeLog extends React.Component {
  render () {

    //const data = ['5 cats -> 2 cats', 'created -> 1 helicopter', 'removed -> 2 pandas']
    let res = []
    for (let i=0; i < LogStore.length; i++) {
      res.push(<p key={i}>{LogStore[i]}</p>)
    }

    return (
      <div className='changeLog'>
        <h3>Change Log</h3>
        {res}
      </div>
    )
  }
})

export default ChangeLog
