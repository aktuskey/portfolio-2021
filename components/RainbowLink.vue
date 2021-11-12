<template>
  <a href="/about" class="RainbowLink">
    <span class="RainbowLink--a">a</span><span class="RainbowLink--b">b</span><span class="RainbowLink--o">o</span><span class="RainbowLink--u">u</span><span class="RainbowLink--t">t</span>
  </a>
</template>

<style lang="scss">
.RainbowLink {
  font-family: $fonts__jakarta-bold;
  font-size: 48px;

  &--a {
    color: $colors__lavender;
  }
  &--b {
    color: $colors__pink;
  }
  &--o {
    color: $colors__mint;
  }
  &--u {
      color: $colors__indigo;
    }
  &--t {
    color: $colors__majorelle;
  }
}
</style>