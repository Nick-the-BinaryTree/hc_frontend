import React from 'react'
import './styles.css'

export default class Slide extends React.Component {
  render () {
    return (
      <div className='slide'>
        {this.props.children}
      </div>
    )
  }
}
