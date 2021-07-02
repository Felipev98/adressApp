<template>
  <main id="index">
    <Header />
    <CardError v-if="error" />
    <Card v-else />
    <Mapa />
  </main>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Index",
  computed: {
    ...mapState(["error"])
  }
};
</script>
