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
    name: projects.list[3].name,
    liveUrl: projects.list[3].liveUrl,
    type: projects.list[3].type,
    role: projects.list[3].role,
    description: projects.list[3].description,
    color: projects.list[3].color,
    screens: projects.list[3].screens,
    images: projects.list[3].images
  })
}
</script>