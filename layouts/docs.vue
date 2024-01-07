<template>
  <div class="w-screen h-screen max-w-full max-h-screen text-white bg-gradient overflow-hidden">
    <single-page-side-nav :content="content" :is-mobile="isMobile" :is-open.sync="drawerOpen" />

    <div id="docs-content" class="overflow-y-auto max-w-full overflow-x-hidden">
      <div class="w-full max-w-5xl mx-auto px-2 py-8">
        <header-page-header has-content :is-mobile="isMobile" @openDrawer="openDrawer" />

        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.content = await this.$content(this.$route.name, { deep: true }).fetch()
    this.content.sort((a, b) => Number(a.order) - Number(b.order))

    if (process.env.NODE_ENV === 'development') console.log('CONTENT', this.content)
  },
  data() {
    return {
      drawerOpen: false,
      isMobile: false,
      content: []
    }
  },
  watch: {
    $route(to, from) {
      if (this.isMobile) {
        this.drawerOpen = false
      }
    }
  },
  computed: {},
  methods: {
    openDrawer() {
      this.drawerOpen = true
    },
    resize() {
      this.isMobile = window.innerWidth < 640 || window.innerHeight < 640
      this.drawerOpen = !this.isMobile
    }
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style>
:root {
  --sidebar-width: 288px;
}
#docs-content {
  margin-left: var(--sidebar-width);
  height: 100vh;
}
@media (max-width: 767px) {
  #docs-content {
    margin-left: 0px;
    height: 100vh;
  }
}
</style>
