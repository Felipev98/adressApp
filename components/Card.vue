<template>
  <div class="resultados">
    <img v-if="loader" class="loader" src="@/static/loader.svg" alt="loader" />
    <ul v-if="ip" class="resultados-card">
      <li class="resultado-contenido">
        <span class="resultado-titulo">IP ADRESS</span>
        <p class="resultado-ip">{{ ip.ip }}</p>
        
      </li>
      <li class="resultado-contenido">
        <span class="resultado-titulo">LOCATION</span>
        <p class="resultado-ip">
          {{ ip.location.city }}, {{ ip.location.region }}
          {{ ip.location.postalCode }}
        </p>
      </li>
      <li class="resultado-contenido">
        <span class="resultado-titulo">TIMEZONE</span>
        <p class="resultado-ip">UTC{{ ip.location.timezone }}</p>
      </li>
      <li class="resultado-contenido">
        <span class="resultado-titulo">ISP</span>
        <p class="resultado-ip">{{ ip.isp }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Card",
  computed: {
    ...mapState(["ip", "loader"])
  }
};
</script>

<style></style>
