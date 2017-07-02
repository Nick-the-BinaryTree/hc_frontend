import React from 'react'
import './styles.css'

import { FloatingActionButton } from 'material-ui'
import ActionSettings from 'material-ui/svg-icons/action/settings'

export default class SettingsButton extends React.Component {
  render () {
    return (
      <FloatingActionButton
        className='settingsButton'
        onTouchTap={this.props.handleToggle}
      >
        <ActionSettings />
      </FloatingActionButton>
    )
  }
}
