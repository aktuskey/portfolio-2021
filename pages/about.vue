<template>
  <div class="About">
    <div class="About__text-wrapper">i am a digital designer and frontend developer 
      <em><span class="About__em-text About__em-text--u">u</span><span class="About__em-text About__em-text--n">n</span><span class="About__em-text About__em-text--i">i</span><span class="About__em-text About__em-text--c">c</span><span class="About__em-text About__em-text--o">o</span><span class="About__em-text About__em-text--r">r</span><span class="About__em-text About__em-text--n2">n</span></em> 
      based in the midwest. when i'm not making web wizardry, you can find me birding, knitting, or out for a run.</div>
    <div class="About__contact-wrapper">
      <a href="mailto:hello@tuskey.dev" class="About__contact-link">email</a>
      <a href="https://twitter.com/lasertuskey" class="About__contact-link" target="_blank">twitter</a>
      <a href="https://www.linkedin.com/in/alexa-tuskey-973ab531" class="About__contact-link" target="_blank">linkedin</a>
    </div>
  </div>
</template>

<style lang="scss">
.About {
  padding: 200px 0 150px;

  &__text-wrapper {
    max-width: 1072px;
    margin: 0 auto;
    font-family: $fonts__jakarta-bold;
    text-align: center;
    font-size: 60px;
    line-height: 88px;
  }

  &__em-text {
    &--u {
      color: $colors__lavender;
    }
    &--n {
      color: $colors__pink;
    }
    &--i {
      color: $colors__mint;
    }
    &--c {
      color: $colors__indigo;
    }
    &--o {
      color: $colors__majorelle;
    }
    &--r {
      color: $colors__bluetiful;
    }
    &--n2 {
      color: $colors__cornflower;
    }
  }

  &__contact-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 70px;
  }

  &__contact-link {
    font-family: $fonts__jakarta-bold;
    font-size: 36px;
    
    &:not(:last-of-type) {
      &::after {
        content: '|';
        padding: 0 16px;
      }
    }
  }
}
</style>