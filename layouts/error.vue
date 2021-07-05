<template>
  <article v-if="error.statusCode === 404" class="container">
    <div class="title">
      <span>{{ message }}</span>
    </div>
    <div class="img">
      <img src="@/static/error.png" width="540" height="447" alt="404" />
    </div>
    <div class="description">
      <h1>I have bad news for you</h1>
      <p>
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <nuxt-link to="/">
        <button>Back to homepage</button>
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
      pageNotFound: "404 NOT FOUND",
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
