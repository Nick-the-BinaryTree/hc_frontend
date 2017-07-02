import React from 'react'
import './styles.css'

import Slide from '../../components/Slide'
import ResTable from '../../components/ResTable'
import ChangeLog from '../../components/ChangeLog'

export default class Resources extends React.Component {
  render () {
    return (
      <Slide>
        <h1 className='headline'>Resources</h1>
        <ResTable />
        <ChangeLog />
      </Slide>
    )
  }
}
