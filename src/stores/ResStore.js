import { observable } from 'mobx'

const LogStore = observable([])

const ResStore = observable([
  {columns : [
    {value: 'Test'},
    {value: '4'}
  ]}
])

export { LogStore, ResStore }
