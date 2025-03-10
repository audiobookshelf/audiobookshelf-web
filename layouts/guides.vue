<template>
  <div class="w-screen h-screen max-w-full max-h-screen text-white bg-gradient overflow-hidden">
    <side-nav :content="content" :is-mobile="isMobile" :is-open.sync="drawerOpen" />

    <div id="guides-content" class="overflow-y-auto max-w-full overflow-x-hidden" style="scrollbar-gutter: stable">
      <div class="w-full max-w-5xl mx-auto px-2 py-8">
        <header-page-header :has-content="hasContent" :is-mobile="isMobile" @openDrawer="openDrawer" />

        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.fetchContent()
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
      this.fetchContent()
      if (this.isMobile) {
        this.drawerOpen = false
      }
    }
  },
  computed: {
    hasContent() {
      return !!this.content.length
    }
  },
  methods: {
    openDrawer() {
      this.drawerOpen = true
    },
    async fetchContent() {
      if (this.$route.name === 'guides-id') {
        this.content = await this.$content('guides').fetch()
      } else if (this.$route.name === 'faq-id') {
        this.content = await this.$content('faq').fetch()
      } else {
        this.content = []
      }

      // Sort pages by the markdown filename. e.g. "0.index.md" comes before "1.docker-windows.md"
      this.content.sort((a, b) => {
        const aDirname = a.path?.split('/').pop() || ''
        const bDirname = b.path?.split('/').pop() || ''
        return aDirname.localeCompare(bDirname, 'en', { numeric: true })
      })
      if (process.env.NODE_ENV === 'development') console.log('CONTENT', this.content)
    },
    resize() {
      this.isMobile = window.innerWidth < 767 || window.innerHeight < 767
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
#guides-content {
  margin-left: var(--sidebar-width);
  height: 100vh;
}
@media (max-width: 767px) {
  #guides-content {
    margin-left: 0px;
    height: 100vh;
  }
}
</style>
