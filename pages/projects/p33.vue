<template>
  <div>
    <DetailHero :name="name" :type="type" :role="role" :description="description" :color="color" />
    <div class="work">
      <WorkScreens :screens="screens" :live-url="liveUrl" />
      <WorkImages :images="images" :live-url="liveUrl" />
    </div>
  </div>
</template>

<script>
import projects from '~/data/projects.js'
import DetailHero from '../../components/DetailHero.vue'
import WorkImages from '../../components/WorkImages.vue'
import WorkScreens from '../../components/WorkScreens.vue'

export default {
  components: {
    DetailHero,
    WorkImages,
    WorkScreens
  },
  data: () => ({
    name: projects.list[4].name,
    liveUrl: projects.list[4].liveUrl,
    type: projects.list[4].type,
    role: projects.list[4].role,
    description: projects.list[4].description,
    color: projects.list[4].color,
    screens: projects.list[4].screens,
    images: projects.list[4].images
  })
}
</script>