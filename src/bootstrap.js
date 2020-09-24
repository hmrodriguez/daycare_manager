import factory from './models/ModelsFactory'
import store from './store'

function createEventModels () {
  const events = factory('Event', 30)

  // sort events in descending order and commit them in the store
  events.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    .forEach(event => store.dispatch('addEvent', event))
}

export default { createEventModels }
