import React from 'react'
import './styles.css'

import { FlatButton } from 'material-ui'
import { observer } from 'mobx-react'

import PressRelease from '../PressRelease'

import { PressStore } from '../../stores/PressStore'

const PressReleases = observer(class PressReleases extends React.Component {
  delete (id) {
    for (let i = 0; i < PressStore.length; i++) {
      if (PressStore[i].id === id) {
        PressStore.splice(i, 1)
        break
      }
    }
  }
  render () {
    let res = []
    for (let i = 0; i < PressStore.length; i++) {
      res.push(<PressRelease
        key={PressStore[i].id}
        content={PressStore[i].content}
        className='pressRelease' />)
      res.push(<FlatButton
        key={i + 10000} // So keys don't conflict with PressStore id's
        label='Delete'
        onClick={() => this.delete(PressStore[i].id)}
        secondary
        className='pressDelete' />)
    }
    return (
      <div>
        {res}
      </div>
    )
  }
})

export default PressReleases
