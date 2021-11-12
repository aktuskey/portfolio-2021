<template>
  <div v-if="images">
    <div class="WorkImages">
      <img v-for="(image, index) in images" :key="index" class="WorkImages__image" :src="image.url" :alt="image.alt">
    </div>
    <a v-if="liveUrl" :href="liveUrl" target="_blank" class="WorkScreens__link">view live site</a>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, default: () => [] },
    liveUrl: { type: String, default: () => '' }
  }
}
</script>

<style lang="scss">
.WorkImages {
  margin-bottom: 60px;
}
</style>