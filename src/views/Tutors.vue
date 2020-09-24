<template>
  <div class="container-fluid" role="container">
    <h1 class="mb-5">Tutor Page</h1>
    <div class="row" role="row">
      <div class="col-3" role="col">
        <ul class="list-group">
          <li v-for="(event, index) in events" :key="index" class="list-group-item">
            {{event.created_at.toString().substring(0,25)}}
          </li>
        </ul>
      </div>
      <div class="col-9" role="col">
        One of three columns
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
