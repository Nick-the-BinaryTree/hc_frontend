import { observable } from 'mobx'

const PressStore = observable([])
const PressIdCount = observable({count: 0})

export { PressIdCount, PressStore }
