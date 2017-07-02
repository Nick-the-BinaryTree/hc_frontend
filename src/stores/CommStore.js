import { observable } from 'mobx'

let CurrentChat = observable({id: 1})

const ChatStore = observable([
  {
    id: 0,
    name: 'Germany',
    newMsg: true,
    log: ['Germany: We need to build an army.', 'Canada: We need to tap maple syrup.', 'Germany: What?', 'Canada: What?']
  },
  {
    id: 1,
    name: 'Argentina',
    newMsg: false,
    log: ['Argentina: Come to South America!', 'Canada: why?', 'Argentina: why not']
  },
  {
    id: 2,
    name: 'France',
    newMsg: false,
    log: ['Canada: thoughts on French Canada?', 'France: it\'s ok', 'Canada: <3']
  },
  {
    id: 3,
    name: 'USA',
    newMsg: true,
    log: ['USA: USA! USA! USA!', 'Canada: Need something?', 'USA: USA! USA! USA!', 'Canada: oh you']
  },
  {
    id: 4,
    name: 'Sealand',
    newMsg: true,
    log: ['Sealand: So glad you have decided to recognize us as a country.', 'Sealand: Right?', 'Sealand: RIGHT?']
  },
  {
    id: 5,
    name: 'Russia',
    newMsg: false,
    log: ['Russia: mmmhm, oil in the Arctic Circle.', 'Canada: oh no...']
  }
])

export { ChatStore, CurrentChat }
