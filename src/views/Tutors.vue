<template>
  <div class="container" role="container">
    <h1 class="mb-5">Tutor Page</h1>
    <div class="row" role="row">
      <div class="col-3" role="col">
        <ul class="list-group">
          <li
            v-for="(event, index) in events"
            :key="index"
            class="list-group-item"
            :class="{active: selectedEvent == event}"
            @click="selectedEvent = event"
          >
            {{event.created_at.toString().substring(0,25)}}
          </li>
        </ul>
      </div>
      <div class="col-9" role="col">
        <event-card v-if="selectedEvent" :event="selectedEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EventCard from '../components/EventCard'

export default {
  components: {
    EventCard
  },

  data () {
    return {
      selectedEvent: null
    }
  },

  mounted () {
    this.selectedEvent = this.events[0]
  },

  computed: {
    ...mapGetters({
      events: 'events'
    })
  }
}
</script>

<style lang="scss">
  .container { text-align: left; }
</style>
