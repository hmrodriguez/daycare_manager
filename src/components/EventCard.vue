<template>
  <div class="card mb-4" role="card">
    <div class="card-header" role="card-header">
      {{ cardHeader }}
      <span class="text-muted" role="time">
        {{ event.created_at.toString().substring(0, 25) }}
      </span>
    </div>
    <div class="card-body" role="card-body">
      <h5 class="card-title"><strong>{{cardTitleContext}}</strong></h5>
      <p class="card-text">{{ event.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => null
    }
  },

  computed: {
    cardHeader () {
      return this.event.type.charAt(0).toUpperCase() + this.event.type.slice(1)
    },

    cardTitleContext () {
      switch (this.event.type) {
        case 'accident':
          return 'Ouch!'
        default:
          return 'Good job!'
      }
    }
  }
}
</script>
