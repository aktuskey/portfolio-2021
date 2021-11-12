<template>
  <nav class="Navbar" :class="{ 'Navbar--hidden': navShouldHide }">
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
  },
  data: () => ({
    hiddenNav: false
  }),
  computed: {
    navShouldHide () {
      return this.hiddenNav && this.$route.path !== '/'
    }
  },
  mounted () {
    this.magicNav()
  },
  methods: {
    magicNav () {
      let lastScrollTop = 0
      window.addEventListener('scroll', () => {
        let st = window.pageYOffset
        if (st > lastScrollTop) {
          this.hiddenNav = true
        } else {
          this.hiddenNav = false
        }
        lastScrollTop = st <= 0 ? 0 : st
      }, false)
    }
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
  transition: transform 0.3s ease-in-out 0.35s;

  &--hidden {
    transform: translateY(-100%);
  }

  &__link {
    color: $colors__black;
    font-family: $fonts__jakarta-bold;
    font-size: 48px;
  }
}
</style>