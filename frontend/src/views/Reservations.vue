<template>
  <div>
    <h1>Reservations</h1>

    <form id="reservation-form" method="post" action="http://localhost:9090/reservation">
      <!-- name -->
      <div>
        <label class="label">Name</label>
        <input type="text" class="input" name="name">
      </div>

      <!-- email -->
      <div>
        <label class="label">Email</label>
        <input type="email" class="input" name="email">
      </div>

      <!-- party size -->
      <div>
        <label for="party">Party size:</label>
        <select name="party" id="cars">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div>
        <label for="start">Date:</label>
        <input type="date" id="start" name="reservation-start"
        value="2021-02-17" min="2021-02-01" max="2021-12-31">
      </div>

      <div>
        <label for="appt">Time</label>
        <input type="time" id="appt" name="appt" min="11:00" max="24:00" required>
        <small></small>
      </div>

      <!-- submit button -->
      <div>
        <button type="submit">
          Book Reservation
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Reservations',

  async mounted() {
    try {
      await axios.get('http://localhost:9090/test')
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
