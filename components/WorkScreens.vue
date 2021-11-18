<template>
  <div v-if="screens" class="WorkScreens">
    <video class="WorkScreens__video" loop muted playsinline autoplay>
      <source :src="screens.desktop" type="video/mp4">
    </video>
    <img :src="screens.mobile" alt="Mobile site views" class="WorkScreens__img">
    <a v-if="liveUrl" :href="liveUrl" target="_blank" class="WorkScreens__link">view live site</a>
  </div>
</template>

<script>
export default {
  props: {
    liveUrl: { type: String, default: () => '' },
    screens: { type: Object, default: () => {} }
  }
}
</script>

<style lang="scss">
.WorkScreens {
  padding: 0 24px;
  margin-bottom: 40px;

  &__link {
    font-family: $fonts__jakarta-bold;
    font-size: 38px;
    text-align: center;
    display: block;
  }
  
  &__img {
    margin: 0 auto 80px;
  }

  &__video {
    width: 100%;
    margin: 0 auto 60px;
    display: block;
  }

  @include respond-to('between') {
    padding: 0;
    margin-bottom: 0;

    &__video {
      width: 90%;
      margin: 0 auto 120px;
    }

    &__img {
      margin: 0 auto 120px;
    }
  }

  @include respond-to('jumbo') {
    &__video {
      width: 100%;
    }
  }
}
</style>