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
}
