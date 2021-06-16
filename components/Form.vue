<template>
  <form @submit.prevent="adressIp" class="form">
    <input
      v-model.trim="ip"
      type="text"
      placeholder="Search for any IP Adress or domain"
    />
    <button type="submit" class="btn">
      <img src="../static/arrow.svg" alt="arrow" />
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      ip: ""
    };
  },
  methods: {
    adressIp() {
      console.log(this.ip);
    }
  }
};
</script>
