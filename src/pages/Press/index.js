import React from 'react'
import './styles.css'

import Slide from '../../components/Slide'
import PressEditor from '../../components/PressEditor'
import PressReleases from '../../components/PressReleases'

export default class Press extends React.Component {
  render () {
    return (
      <Slide>
        <h1 className='headline'>Press Releases</h1>
        <PressEditor />
        <PressReleases />
      </Slide>
    )
  }
}
