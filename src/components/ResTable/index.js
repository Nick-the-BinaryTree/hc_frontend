import React from 'react'
import './styles.css'

import { observer } from 'mobx-react'
import EditTable from 'material-ui-table-edit'

import { LogStore, ResStore } from '../../stores/ResStore'

const headers = [
  {value: 'Name', type: 'TextField', width: '30vw'},
  {value: 'Amount', type: 'TextField', width: '30vw'}
]

let rows = observer(ResStore)
let log = observer(LogStore)

const onChange = (row) => {
  //editRes(row.id, row.columns[0].value, row.columns[1].value)
  addToLog(getTime() + " | " + row.columns[0].value + " => " + row.columns[1].value)
}

const onDelete = (e) => {
  //removeRes(e.rowId)
  addToLog(getTime() + " | Deleted " + e.row.columns[0].value)
}

const getTime = () => {
  const d = new Date()
  let m = d.getMinutes()
  if (m < 10) {
    m = "0"+m
  }
  return d.getHours() + ":" + m
}

// const editRes = (id, k, v) => {
//   // rows[id].columns[0] = k
//   // rows[id].columns[1] = v
// }
//
// const removeRes = (id) => {
//   //delete rows[id]
// }

const addToLog = (data) => {
  if (log.length >= 10) {
    log.splice(0, 1)
  }
  log.push(data)
}

const ResTable = observer(class ResTable extends React.Component {
  render () {
    return (
      <EditTable
        onChange={onChange}
        onDelete={onDelete}
        rows={rows}
        headerColumns={headers}
        enableDelete
        className='test'
      />
    )
  }
})

export default ResTable
