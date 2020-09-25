<template>
  <div class="row justify-content-md-center" role="row">
    <div class="col-12 col-md-8" role="col" v-if="items">
      <event-card
        v-for="(event, index) in items"
        :key="index"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
import EventHelper from '../helpers/EventHelper'
import EventCard from '../components/EventCard'

export default {
  props: ['events'],

  components: {
    EventCard
  },

  data () {
    return {
      items: []
    }
  },

  mounted () {
    const eventHelper = new EventHelper()

    this.items = eventHelper.sortEvents(this.events)
  }
}
</script>
