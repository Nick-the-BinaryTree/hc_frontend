import React from 'react'
import './styles.css'

import { Checkbox, Drawer, FlatButton, TextField } from 'material-ui'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import $ from 'jquery'

let passStore = observable({
  oldError: '',
  newError: ''
})

const Settings = observer(class Settings extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit () { // Imperative is more straightfoward for form validation
    let values = {}
    values['old'] = $('#old').val()
    values['new'] = $('#new').val()
    values['repeat'] = $('#repeat').val()
    let valid = true
    if (values['old'] !== 'fish') {
      passStore.oldError = 'Incorrect Password'
      valid = false
    } else {
      passStore.oldError = ''
    }
    if (values['new'] === '') {
      passStore.newError = 'Invalid New Password'
      valid = false
    } else if (values['new'] !== values['repeat']) {
      passStore.newError = 'Passwords Not Matching'
      valid = false
    } else {
      passStore.newError = ''
    }
    if (valid) {
      console.log('send to server')
    }
  }
  render () {
    return (
      <Drawer
        docked={false}
        width={300}
        open={this.props.open}
        onRequestChange={this.props.onRequestChange}
      >
        <form id='listenToForm' className='pane'>
          <h3>Listen to:</h3>
          <Checkbox label='France' />
          <Checkbox label='Spain' />
          <Checkbox label='Canada' />
          <Checkbox label='Venezuela' />
          <Checkbox label='France' />
          <Checkbox label='Spain' />
          <Checkbox label='Canada' />
          <Checkbox label='Venezuela' />
          <Checkbox label='France' />
          <Checkbox label='Spain' />
          <Checkbox label='Canada' />
          <Checkbox label='Venezuela' />
        </form>
        <br />
        <hr className='divider' />
        <form id='changePassForm' className='pane'>
          <h3>Don't like your password?</h3>
          <TextField
            id='old'
            type='password'
            hintText='Old Password'
            errorText={passStore.oldError}
          />
          <TextField
            id='new'
            type='password'
            hintText='New Password'
            errorText={passStore.newError}
          />
          <TextField
            id='repeat'
            type='password'
            hintText='Repeat New Password'
          />
          <FlatButton label='Change Password'
            onClick={this.onSubmit}
            primary />
        </form>
        <br /><br /><hr className='divider' />
        <FlatButton label='Sign Out' secondary />
      </Drawer>
    )
  }
})

export default Settings
