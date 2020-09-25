<template>
  <div class="container" role="container">
    <h1 class="mb-5">Tutor Page</h1>
    <grouped-events-view :events="events"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GroupedEventsView from '../components/GroupedEvents'

export default {
  components: {
    GroupedEventsView
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
