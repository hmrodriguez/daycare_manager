import factory from './models/ModelsFactory'
import store from './store'
import EventHelper from './helpers/EventHelper'

function createEventModels () {
  const eventHelper = new EventHelper()

  const events = eventHelper.sortEvents(factory('Event', 30))

  // sort events in descending order and commit them in the store
  events.forEach(event => store.dispatch('addEvent', event))
}

export default { createEventModels }
