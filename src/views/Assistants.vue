<template>
  <div class="container" role="container">
    <h1 class="mb-5">Assistant Page</h1>
    <div class="row justify-content-md-center" role="row">
      <div class="col-12 col-md-8" role="col">
        <event-form @event-added="onEventAdded"/>
      </div>
    </div>
  </div>
</template>

<script>
import EventForm from '../components/EventForm'

export default {
  components: {
    EventForm
  },

  methods: {
    onEventAdded () {
      alert('Event successfully added!')
    }
  }
}
</script>

<style lang="scss">
  .container { text-align: left; }
</style>
