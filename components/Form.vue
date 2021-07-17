<template>
  <form
    :onchange="searchIp(ip)"
    @submit.prevent="searchIpAddress(ip)"
    class="form"
  >
    <input
      v-model.trim="ip"
      type="search"
      placeholder="Search for any IP Adress or domain"
    />
    <button type="submit" class="btn">
      <img src="../static/arrow.svg" alt="arrow" />
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ip: ""
    };
  },
  methods: {
    ...mapActions(["searchIpAddress", "searchIp"])
  }
};
</script>
<style>
@media screen and (max-width:900px){
  .form{
    transform: translateX(1px);
  }
}
</style>
