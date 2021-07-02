<template>
  <div class="resultados">
    <img v-if="loader" class="loader" src="@/static/loader.svg" alt="loader" />
    <ul class="resultados-card">
      <div class="message">
        <h3 class="">An error occurred: {{ error.status }}</h3>
        <p class="">{{ error.statusText }}</p>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CardError",
  computed: {
    ...mapState(["error", "loader"])
  }
};
</script>
