<template>
  <div class="DetailHero">
    <div class="DetailHero__svgs" v-midnight:wrapper.color>
      <span class="DetailHero__svg-wrap" v-midnight:logo.white>
        <svg fill="white" width="1221" height="475" viewBox="0 0 1221 445" xmlns="http://www.w3.org/2000/svg">
          <path class="DetailHero__svg DetailHero__svg--halfmoon" d="M305 401.425H237.362C237.468 391.086 235.352 380.831 231.135 371.25C226.917 361.67 220.683 352.956 212.793 345.61C204.902 338.265 195.511 332.434 185.162 328.455C174.814 324.475 163.712 322.427 152.5 322.427C141.288 322.427 130.186 324.475 119.838 328.455C109.489 332.434 100.098 338.265 92.2073 345.61C84.3165 352.956 78.0825 361.67 73.8654 371.25C69.6482 380.831 67.5315 391.086 67.6376 401.425H0C0 323.896 68.3976 260.825 152.473 260.825C236.549 260.825 305 323.896 305 401.425Z" fill="inherit"/>
          <path class="DetailHero__svg DetailHero__svg--halfcircle" d="M846.102 223.616C826.714 200.145 818.267 170.556 822.619 141.361C826.97 112.166 843.764 85.7544 869.306 67.9377C894.847 50.121 927.045 42.3582 958.815 46.357C990.585 50.3557 1019.33 65.7885 1038.71 89.2603L846.102 223.616Z" fill="inherit"/>
          <path class="DetailHero__svg DetailHero__svg--pill" d="M1209.67 434.204C1202.4 440.871 1192.54 444.616 1182.27 444.616C1172 444.616 1162.15 440.871 1154.88 434.204L1032.34 321.592C1025.08 314.915 1021 305.861 1021 296.42C1021 286.979 1025.08 277.925 1032.34 271.248V271.248C1039.61 264.574 1049.46 260.825 1059.73 260.825C1070.01 260.825 1079.86 264.574 1087.13 271.248L1209.67 383.856C1216.93 390.537 1221 399.591 1221 409.03C1221 418.47 1216.92 427.523 1209.67 434.204Z" fill="inherit"/>
          <circle class="DetailHero__svg DetailHero__svg--circle" cx="346" cy="147" r="86" fill="inherit"/>
        </svg>
      </span>
      <span class="DetailHero__svg-wrap" v-midnight:logo.color>
        <svg :style="'fill:' + color" width="1221" height="475" viewBox="0 0 1221 445" xmlns="http://www.w3.org/2000/svg">
          <path class="DetailHero__svg DetailHero__svg--halfmoon" d="M305 401.425H237.362C237.468 391.086 235.352 380.831 231.135 371.25C226.917 361.67 220.683 352.956 212.793 345.61C204.902 338.265 195.511 332.434 185.162 328.455C174.814 324.475 163.712 322.427 152.5 322.427C141.288 322.427 130.186 324.475 119.838 328.455C109.489 332.434 100.098 338.265 92.2073 345.61C84.3165 352.956 78.0825 361.67 73.8654 371.25C69.6482 380.831 67.5315 391.086 67.6376 401.425H0C0 323.896 68.3976 260.825 152.473 260.825C236.549 260.825 305 323.896 305 401.425Z" fill="inherit"/>
          <path class="DetailHero__svg DetailHero__svg--halfcircle" d="M846.102 223.616C826.714 200.145 818.267 170.556 822.619 141.361C826.97 112.166 843.764 85.7544 869.306 67.9377C894.847 50.121 927.045 42.3582 958.815 46.357C990.585 50.3557 1019.33 65.7885 1038.71 89.2603L846.102 223.616Z" fill="inherit"/>
          <path class="DetailHero__svg DetailHero__svg--pill" d="M1209.67 434.204C1202.4 440.871 1192.54 444.616 1182.27 444.616C1172 444.616 1162.15 440.871 1154.88 434.204L1032.34 321.592C1025.08 314.915 1021 305.861 1021 296.42C1021 286.979 1025.08 277.925 1032.34 271.248V271.248C1039.61 264.574 1049.46 260.825 1059.73 260.825C1070.01 260.825 1079.86 264.574 1087.13 271.248L1209.67 383.856C1216.93 390.537 1221 399.591 1221 409.03C1221 418.47 1216.92 427.523 1209.67 434.204Z" fill="inherit"/>
          <circle class="DetailHero__svg DetailHero__svg--circle" cx="346" cy="147" r="86" fill="inherit"/>
        </svg>
      </span>
    </div>
    <section class="DetailHero__main" v-midnight:section.color>
      <div class="DetailHero__text-wrapper">
        <h1 class="DetailHero__name">{{name}}</h1>
        <div class="DetailHero__notes">
          <div class="DetailHero__note" v-text="'type: ' + type"></div>
          <div class="DetailHero__note" v-text="'role: ' + role"></div>
        </div>
      </div>
    </section>
    <section class="DetailHero__description-wrapper" :style="'background-color:' + color" v-midnight:section.white>
      <p class="DetailHero__description" v-text="description"></p>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    name: { type: String, default: () => '' },
    type: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    color: { type: String, default: () => '#000' }
  }
}
</script>

<style lang="scss">
.DetailHero {

  &__svgs {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &__svg-wrap {
    position: absolute;
    top: -6%;
    left: 2%;
    right: 2%;
    overflow: hidden;

    svg {
      width: 100%;
    }
  }

  &__svg {
    &--halfmoon {
      animation: float 3.5s ease-out infinite;
    }
    &--halfcircle {
      animation: float 3.25s ease-out infinite;
    }
    &--pill {
      animation: float 3.75s ease-out infinite;
    }
    &--circle {
      animation: float 3s ease-out infinite;
    }
  }

  &__main {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 70px;
  }

  &__text-wrapper {
    position: relative;
  }

  &__name {
    font-family: $fonts__jakarta-bold;
    font-size: 80px;
    text-align: center;
    line-height: 1;
  }

  &__notes {
    margin-top: 32px;
  }

  &__note {
    font-family: $fonts__jakarta-bold;
    font-size: 18px;
    line-height: 1.4;
    text-align: center;
  }

  &__description-wrapper {
    padding: 60px 24px 160px;
  }

  &__description {
    color: $colors__black;
    font-family: $fonts__inter;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    max-width: 895px;
    margin: 0 auto;
    position: relative;
  }

  @include respond-to('between') {

    &__main {
    height: 580px;
    padding-bottom: 115px;
  }

  &__name {
    font-size: 144px;
  }

  &__notes {
    margin-top: 40px;
  }

    &__svg-wrap {
      top: 7%;
      left: 7%;
      svg {
        width: auto;
      }
    }

    &__description-wrapper {
      padding: 115px 0 380px;
    }

    &__description {
      font-size: 24px;
      line-height: 34px;
    }
  }
}
</style>