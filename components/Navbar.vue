<template>
  <nav class="Navbar">
    <a href="/" class="Navbar__link">
      <h1>tuskey.dev</h1>
    </a>
    <RainbowLink />
  </nav>
</template>

<script>
import RainbowLink from '../components/RainbowLink.vue'
export default {
  components: {
    RainbowLink
  }
}
</script>

<style lang="scss">
.Navbar {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  z-index: 10;

  &__link {
    color: $colors__black;
    font-family: $fonts__jakarta-bold;
    font-size: 48px;
  }
}
</style>