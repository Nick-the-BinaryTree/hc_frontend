import React from 'react'
import './styles.css'

export default class PressReleases extends React.Component {
  render () {
    return (
      <div className='pressRelease' dangerouslySetInnerHTML={{__html: this.props.content}}>
      </div>
    )
  }
}
