import React from 'react'
import './styles.css'

import { Tabs, Tab } from 'material-ui'
import SwipeableViews from 'react-swipeable-views'

import Resources from './pages/Resources'

import Settings from './components/Settings'
import SettingsButton from './components/SettingsButton'
import Slide from './components/Slide'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 0,
      open: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
  }
  handleToggle = () => this.setState({open: !this.state.open})
  render () {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Res" value={0} />
          <Tab label="Comm" value={1} />
          <Tab label="Press" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <Resources />
          <Slide>
            <h2 className='headline'>Communication</h2>
          </Slide>
          <Slide>
            <h2>Press Releases</h2>
          </Slide>
        </SwipeableViews>
        <Settings
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        />
        <SettingsButton handleToggle={this.handleToggle}/>
      </div>
    );
  }
}

export default App;
