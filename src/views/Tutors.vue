<template>
  <div class="container" role="container">
    <h1 class="mb-5">Tutor Page</h1>

    <div class="btn-toolbar d-none d-sm-none d-md-block" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group mb-5" role="group" aria-label="First group">
        <button
          type="button"
          class="btn btn-secondary"
          :class="{active: selectedView == 'list'}"
          @click="selectedView = 'list'"
        >
          List
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          :class="{active: selectedView == 'grouped'}"
          @click="selectedView = 'grouped'"
        >
          Date groups
        </button>
      </div>
    </div>

    <component :is="currentView" :events="events"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GroupedEventsView from '../components/GroupedEvents'
import ScrollableEventsView from '../components/ScrollableEvents'

export default {
  components: {
    GroupedEventsView,
    ScrollableEventsView
  },

  data () {
    return {
      selectedView: 'list'
    }
  },

  computed: {
    ...mapGetters({
      events: 'events'
    }),

    currentView () {
      return this.selectedView === 'grouped' ? 'grouped-events-view' : 'scrollable-events-view'
    }
  }
}
</script>

<style lang="scss">
  .container { text-align: left; }
</style>
