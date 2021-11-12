<template>
  <div>
    <Navbar />
    <Nuxt />
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from '../components/FooterBar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    FooterBar,
    Navbar
  }
}
</script>