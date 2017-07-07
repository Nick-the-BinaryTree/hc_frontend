import React from 'react'
import './styles.css'

import { RaisedButton } from 'material-ui'
import { convertToRaw } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

import { PressIdCount, PressStore } from '../../stores/PressStore'

require('react-draft-wysiwyg/dist/react-draft-wysiwyg.css')

export default class PressEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorContents: 'test', editorInitialized: false }
    this.publish = this.publish.bind(this)
  }
  onEditorStateChange (updatedContent) {
    this.setState({
      editorContents: updatedContent,
      editorInitialized: true
    })
  }
  publish () {
    const content = draftToHtml(convertToRaw(this.state.editorContents.getCurrentContent()))
    PressStore.push({ id: PressIdCount.count++, content: content })
  }
  render () {
    return (
      <div>
        <Editor
          wrapperClassName='editor'
          onEditorStateChange={this.onEditorStateChange.bind(this)}
        />
        <br />
        <div className='pressPublishWrapper'>
          <RaisedButton label='Publish Press Release'
            onClick={this.publish}
            disabled={!this.state.editorInitialized}
            className='pressPublish'
           />
       </div>
      </div>
    )
  }
}
