<template>
  <div class="w-full max-w-5xl mx-auto px-2 py-8">
    <article v-for="page in content" :key="page.hash" :id="page.hash.slice(1)" class="prose prose-invert prose-sm md:prose-base max-w-5xl flex items-center" style="min-height: 60vh">
      <div class="px-2 py-8 md:py-20 max-w-full">
        <nuxt-content :document="page" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async fetch() {
    this.content = await this.$content('faq', { deep: true }).fetch()
    this.content.sort((a, b) => Number(a.order) - Number(b.order))
  },
  data() {
    return {
      content: null,
      appStoreUrl: 'https://testflight.apple.com/join/wiic7QIW',
      dockerHubUrl: 'https://hub.docker.com/r/advplyr/audiobookshelf',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.audiobookshelf.app',
      githubUrl: 'https://github.com/advplyr/audiobookshelf',
      discordUrl: 'https://discord.gg/HQgCbd6E75',
      matrixUrl: 'https://matrix.to/#/#audiobookshelf:matrix.org'
    }
  },
  computed: {},
  methods: {},
  mounted() {
    if (typeof Prism !== undefined) {
      Prism.highlightAll()
    }
  }
}
</script>

<style>
table,
tr,
td,
th {
  border: 1px solid #666;
}
table td,
th {
  padding: 5px 15px;
}

.prose :where(code):not(:where([class~='not-prose']*))::before {
  content: '';
}
.prose :where(code):not(:where([class~='not-prose']*))::after {
  content: '';
}
.prose :where(blockquote):not(:where([class~='not-prose'] *)) {
  quotes: none;
  font-style: normal;
}
</style>
