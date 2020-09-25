import factory from './models/ModelsFactory'
import store from './store'

function createEventModels () {
  const events = factory('Event', 10)

  // commit the events in the store
  events.forEach(event => store.dispatch('addEvent', event))
}

export default { createEventModels }
