<template>
  <article v-if="error.statusCode === 404" class="container">
    <div class="title">
      <span>{{ message }}</span>
    </div>
    <div class="img">
      <img src="@/static/error.png" width="540" height="480" alt="404" />
    </div>
    <div class="description">
      <h1>Tengo malas noticias para ti</h1>
      <p>
        La página que buscas podría estar eliminada o no estar disponible
        temporalmente
      </p>
      <nuxt-link to="/">
        <button>Volver</button>
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  layout: "error",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  },
  computed: {
    message() {
      return this.error.statusCode === 404
        ? this.pageNotFound
        : this.otherError;
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  }
};
</script>

<style src="@/assets/css/error.css" scoped></style>
