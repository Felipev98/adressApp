<template>
<div id="map-wrap" style="height: 83vh">
 <client-only>
   <l-map :zoom=13 :center="[55.9464418,8.1277591]">
     <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
     <l-marker :lat-lng="[22.9464,3.1277591]"></l-marker>
   </l-map>
 </client-only>
</div>
</template>

<script>
export default {
    name: 'Mapa',
  data () {
    return {
    }
  }
}
</script>
<style >

.leaflet-pane .leaflet-marker-pane img{
width: 2rem !important;
}
</style>
