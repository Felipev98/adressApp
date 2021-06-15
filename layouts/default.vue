<template>
<div>
<Header/>
<Mapa/>
</div>

</template>

<script>
import Header from '../components/Header.vue'
import Mapa from '../components/Mapa.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    Header,Mapa
  }
}
</script>
<style >
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
