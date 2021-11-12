<template>
  <footer class="FooterBar">
    <div class="FooterBar__line">
      <span class="FooterBar__text">©2021 alexa tuskey. made with </span>
      <span class="Footerbar__text FooterBar__text--heart">♥</span>
      <span class="FooterBar__text"> in the midwest</span>
    </div>
  </footer>
</template>

<style lang="scss">
.FooterBar {
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
  position: relative;
  z-index: 10;

  &__text {
    font-family: $fonts__jakarta-bold;
    font-size: 20px;

    &--heart {
      color: $colors__pink;
    }
  }
}
</style>