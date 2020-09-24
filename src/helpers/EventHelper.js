export default class EventHelper {
  /**
   * Returns a sorted list of events
   *
   * @param {Array} events
   * @param {Boolean} desc
   * @returns {Array}
   */
  sortEvents (events, desc = true) {
    if (desc) {
      return events.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
    }

    return events.sort((a, b) => a.created_at.getTime() - b.created_at.getTime())
  }

  /**
   * Returns a grouped list of events
   *
   * @param {Array} events
   * @returns {Array}
   */
  getGroupedEvents (events) {
    const groupedEvents = { }

    events.forEach(function (event) {
      let month = '' + (event.created_at.getMonth() + 1)
      let day = '' + event.created_at.getDate()
      const year = event.created_at.getFullYear()

      if (month.length < 2) {
        month = '0' + month
      }

      if (day.length < 2) {
        day = '0' + day
      }

      const date = [year, month, day].join('-')

      if (!groupedEvents[date]) {
        groupedEvents[date] = []
      }

      groupedEvents[date].push(event)
    })

    return groupedEvents
  }
}
