<template>
  <div class="fondo">
      <form class="texto-header">
                <p>IP Adress Tracker</p>
                <input type="text" placeholder="Search for any IP Adress or domain">
                <button id="boton"><img src="../static/arrow.svg" alt=""></button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.fondo{
background-image: url('../static/fondo.png');
height: 15rem;
background-size: cover;
background-position: center;
width: 100%;
}
.texto-header{
    text-align: center;
    color: white;
    font-size: 1rem;
    padding-top: 2rem;
}
.texto-header input{
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 25%;
    margin-top: 1rem;
}
#boton{
    padding: 1rem;
    background-color: black;
    border: none;
    border-radius: 0px 14px 14px 0px;
    width: 3rem;
    transform: translateX(-0.7rem);
    height: 100%;
}
</style>