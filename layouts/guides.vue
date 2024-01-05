<template>
  <div class="w-screen h-screen max-w-full max-h-screen text-white bg-gradient overflow-hidden">
    <div id="guides-sidebar" class="hidden md:block fixed top-0 left-0 h-full bg-primary border-r border-white border-opacity-25">
      <div class="flex justify-center items-center py-4 mb-6">
        <nuxt-link to="/" class="h-12 w-12 -ml-4">
          <img src="/Logo48.png" class="h-full w-full" />
        </nuxt-link>
        <nuxt-link to="/" class="text-2xl pl-2 sm:pl-4 font-book hover:underline">audiobookshelf</nuxt-link>
      </div>
      <nuxt-link v-for="item in content" :key="item.slug" :to="item.fullpath" class="px-4 py-1.5 text-sm font-semibold block mr-6 mb-2" :class="item.fullpath === routePath ? 'bg-white bg-opacity-10 rounded-r-full text-yellow-400' : 'text-gray-300 hover:text-white'">{{ item.title }}</nuxt-link>
    </div>
    <div id="guides-content" class="overflow-y-auto max-w-full overflow-x-hidden" style="scrollbar-gutter: stable">
      <div class="w-full max-w-5xl mx-auto px-2 py-8">

        <header-PageHeader></header-PageHeader>

        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.fetchContent();
  },
  data() {
    return {
      content: []
    }
  },
  watch: {
    '$route'(to, from) {
      this.fetchContent()
    }
  },
  computed: {
    routePath() {
      const routePath = this.$route.path || ''
      return routePath.replace(/\/$/, '')
    }
  },
  methods: {
    async fetchContent() {
      if (this.$route.name === 'guides-id') {
        this.content = await this.$content('guides').fetch()
      } else if (this.$route.name === 'faq-id') {
        this.content = await this.$content('faq').fetch()
      } else {
        this.content = await this.$content(this.$route.name, { deep: true }).fetch()
      }
      this.content.sort((a, b) => Number(a.order) - Number(b.order))
      if (process.env.NODE_ENV === 'development') console.log('CONTENT', this.content)
    }
  },
  mounted() {}
}
</script>

<style>
:root {
  --guides-sidebar-width: 280px;
}

#guides-sidebar {
  width: var(--guides-sidebar-width);
}
#guides-content {
  margin-left: var(--guides-sidebar-width);
  height: 100vh;
}
@media (max-width: 767px) {
  #guides-content {
    margin-left: 0px;
    height: 100vh;
  }
}
</style>
