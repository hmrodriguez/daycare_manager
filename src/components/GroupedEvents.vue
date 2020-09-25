<template>
  <div class="row" role="row">
    <div class="col-3" role="col">
      <ul class="list-group">
        <li
          v-for="(date, index) in dateList"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
          :class="{active: date === selectedEventDate}"
          @click="onDateClick(date)"
        >
          {{date.toString().substring(0,25)}}
          <span class="badge badge-primary badge-pill" role="badge">
            {{groupedEvents[date].length}}
          </span>
        </li>
      </ul>
    </div>
    <div class="col-9" role="col" v-if="selectedEventDate">
      <event-card
        v-for="(event, index) in selectedEventGroup"
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
      selectedEventDate: null
    }
  },

  mounted () {
    this.selectedEventDate = this.dateList[0]
  },

  computed: {
    groupedEvents () {
      const eventHelper = new EventHelper()

      return eventHelper.getGroupedEvents(this.events)
    },

    dateList () {
      const groupedEvents = this.groupedEvents

      const dateList = Object.keys(groupedEvents).sort(function (a, b) {
        a = new Date(a)
        b = new Date(b)

        return b.getTime() - a.getTime()
      })

      // return dateList.map(date => new Date(date))
      return dateList
    },

    selectedEventGroup () {
      return this.groupedEvents[this.selectedEventDate]
    }
  },

  methods: {
    onDateClick (date) {
      this.selectedEventDate = date
    }
  }
}
</script>
