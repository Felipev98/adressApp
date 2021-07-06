<template>
  <div id="map-wrap" style="height: 68vh">
    <client-only>
      <l-map :zoom="15" :center="coordenadas()">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="coordenadas()">
          <l-popup>Your IP is here</l-popup>
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Mapa",
  data() {
    return {};
  },
  computed: {
    ...mapState(["ip", "loader"])
  },
  methods: {
    coordenadas: function() {
      return this.ip
        ? [this.ip.location.lat, this.ip.location.lng]
        : ["33.7819589", "-84.3894095"];
    }
  }
};
</script>
<style>
.leaflet-pane .leaflet-marker-pane img {
  width: 2rem !important;
}
</style>
