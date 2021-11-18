<template>
  <div class="ProjectList">
    <ul class="ProjectList__list">
      <li v-for="(project, index) in projects.list" :key="index" class="ProjectList__project">
        <a :href="project.url" class="ProjectList__link" v-text="project.name" :ref="'project' + index"></a>
        <p class="ProjectList__description" v-text="project.categories"></p>
      </li>
      <li class="ProjectList__project">
        <a href="/" class="ProjectList__link" ref="test">Test</a>
      </li>
    </ul>
    <div class="ProjectList__shapes">
      <svg class="ProjectList__shape ProjectList__shape--circle" width="254" height="254" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="127" cy="127" r="127" fill="#E78AB5"/>
      </svg>
      <svg class="ProjectList__shape ProjectList__shape--halfcircle" width="339" height="303" viewBox="0 0 339 303" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.6672 302.08C8.52078 262.365 -4.61406 212.301 2.15199 162.902C8.91805 113.502 35.0307 68.8136 74.7457 38.6672C114.461 8.52075 164.525 -4.61405 213.924 2.15197C263.324 8.91799 308.012 35.0307 338.159 74.7457L38.6672 302.08Z" fill="#E5A7E7"/>
      </svg>
      <svg class="ProjectList__shape ProjectList__shape--halfmoon" width="534" height="267" viewBox="0 0 534 267" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M534 267H415.579C415.765 247.367 412.059 227.891 404.675 209.699C397.292 191.506 386.377 174.957 372.562 161.008C358.746 147.059 342.305 135.986 324.186 128.43C306.067 120.873 286.631 116.983 267 116.983C247.369 116.983 227.933 120.873 209.814 128.43C191.696 135.986 175.254 147.059 161.438 161.008C147.623 174.957 136.708 191.506 129.325 209.699C121.941 227.891 118.235 247.367 118.421 267H0C0 119.773 119.752 0 266.953 0C414.155 0 534 119.773 534 267Z" fill="#7F69EE"/>
      </svg>
      <svg class="ProjectList__shape ProjectList__shape--pill" width="332" height="332" viewBox="0 0 332 332" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M313.185 313.191C301.117 325.236 284.764 332 267.714 332C250.664 332 234.311 325.236 222.243 313.191L18.8284 109.771C6.77245 97.7089 0 81.3532 0 64.2995C0 47.2458 6.77245 30.8902 18.8284 18.8286V18.8286C30.89 6.77259 47.2457 0 64.2994 0C81.3531 0 97.7088 6.77259 109.77 18.8286L313.191 222.243C325.236 234.312 332.001 250.667 332 267.718C331.999 284.77 325.232 301.124 313.185 313.191Z" fill="#A5EBCB"/>
      </svg>
      <svg class="ProjectList__shape ProjectList__shape--bar" width="90" height="450" viewBox="0 0 90 450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="90" height="450" fill="#6195E9"/>
      </svg>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import projects from '~/data/projects.js'
const charming = require('charming')

export default {
  data: () => ({
    projects
  }),
  mounted () {
    const testing = this.$refs.test
    charming(testing)
    const key = Object.keys(this.$refs) || {}
    console.log(key.map(item => item))
  }
}
</script>

<style lang="scss">
  .ProjectList {
    padding: 100px 0 60px;
    position: relative;

    &__list {
      z-index: 1;
      position: relative;
    }

    &__project {
      text-align: center;
      font-size: 48px;
      font-family: $fonts__jakarta-bold;
      margin-bottom: 16px;

      &:hover {
        .ProjectList__description {
          transform: translateY(0);
          visibility: visible;
          opacity: 1;
        }
      }
    }

    &__link {
      color: $colors__black;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #7D97C0;
      }
    }

    &__description {
      font-family: $fonts__inter;
      font-size: 16px;
      text-align: center;
      margin-top: 8px;
      transform: translateY(-60px);
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    &__shapes {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    &__shape {
      position: absolute;

      @media (prefers-reduced-motion) {
        animation: none;
      }

      &--circle {
        width: 45%;
        left: 45%;
        top: 23%;
        animation: float 3.5s ease-out infinite;
      }

      &--bar {
        height: 35%;
        bottom: 0%;
        right: 10%;
        animation: float 4s ease-out infinite;
      }

      &--halfcircle {
        width: 45%;
        top: 42%;
        right: 45%;
        animation: float 3.75s ease-out infinite;
      }

      &--halfmoon {
        width: 55%;
        left: 10%;
        bottom: 3%;
        animation: float 5s ease-out infinite;
      }

      &--pill {
        width: 40%;
        top: -2%;
        left: 7%;
        animation: float 4s ease-out infinite;
      }
    }

    @include respond-to('between') {
      padding: 150px 0 100px;

      &__project {
        font-size: 94px;
        margin-bottom: 54px;
      }

      &__shape {
        &--circle {
        width: auto;
        left: 37%;
        top: 10%;
      }

      &--bar {
        height: auto;
        bottom: -20%;
        right: 10%;
      }

      &--halfcircle {
        width: auto;
        top: 17%;
        right: 10%;
      }

      &--halfmoon {
        width: auto;
        left: 10%;
        bottom: 5%;
      }

      &--pill {
        width: auto;
        top: 5%;
        left: 7%;
      }
      }
    }
  }
</style>