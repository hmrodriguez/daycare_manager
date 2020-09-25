<template>
  <div class="card" role="card">
    <div class="card-header" role="card-header">New event</div>
    <div class="card-body" role="card-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group" role="form-group">
          <label for="type">Type</label>
          <select name="type" id="type" class="form-control" v-model="event.type" required>
            <option v-for="(type, index) in eventTypes" :key="index" :value="type.key">
              {{type.value}}
            </option>
          </select>
        </div>
        <div class="form-group" role="form-group">
          <label for="description">Description</label>
          <textarea name="description" id="description" class="form-control" v-model="event.description" required/>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import faker from 'faker'

export default {
  data () {
    return {
      event: this.newEvent()
    }
  },

  computed: {
    eventTypes () {
      return [
        {
          key: 'accident',
          value: 'Accident'
        },
        {
          key: 'achievement',
          value: 'Achievement'
        }
      ]
    }
  },

  methods: {
    ...mapActions(['addEvent']),

    onSubmit () {
      this.addEvent(this.event)

      this.event = this.newEvent()

      this.$emit('event-added')
    },

    newEvent () {
      return {
        type: 'accident',
        description: faker.lorem.paragraph(),
        created_at: new Date()
      }
    }
  }
}
</script>
