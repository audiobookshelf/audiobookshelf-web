<template>
  <div class="w-full max-w-5xl mx-auto px-2 py-8">
    <div class="flex items-center py-1">
      <nuxt-link to="/" class="h-8 w-8 md:hidden mx-1.5">
        <img src="/favicon.ico" class="h-full w-full" />
      </nuxt-link>

      <a :href="discordUrl" class="mx-2 hidden md:block">
        <img src="/discord.svg" class="h-5 md:h-7 hover:scale-110 transform duration-100" />
      </a>
      <a :href="dockerHubUrl" class="mx-2 hidden md:block">
        <img src="/docker.svg" class="h-8 hover:scale-110 transform duration-100" />
      </a>
      <a :href="githubUrl" class="hidden md:block">
        <img src="/github.svg" class="h-7 hover:scale-110 transform duration-100 mx-1 sm:mx-2" />
      </a>
      <a :href="playStoreUrl" class="hidden lg:block">
        <img src="/GetGooglePlayStore.png" class="h-7 ml-2" />
      </a>
      <a :href="appStoreUrl" class="hidden lg:block">
        <img src="/AppleAppStoreDark.svg" class="h-7 ml-2" />
      </a>

      <div class="flex-grow" />

      <nuxt-link to="/guides" class="text-base md:text-lg font-semibold text-gray-200 hover:text-white hover:underline mx-1.5 md:mx-4">Guides</nuxt-link>
      <nuxt-link to="/support" class="text-base md:text-lg font-semibold text-gray-200 hover:text-white hover:underline mx-1.5 md:mx-4">Support</nuxt-link>
      <nuxt-link to="/showcase" class="text-base md:text-lg font-semibold text-gray-200 hover:text-white hover:underline mx-1.5 md:mx-4">Showcase</nuxt-link>
    </div>

    <article v-for="page in content" :key="page.slug" :id="page.hash.slice(1)" class="prose prose-invert prose-sm md:prose-base max-w-5xl flex items-center" style="min-height: 60vh">
      <div class="px-2 py-8 md:py-20 max-w-full">
        <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
          <nuxt-link :to="page.hash"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
          >{{ page.title }}
        </h1>

        <nuxt-content :document="page" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  async fetch() {
    this.content = await this.$content('docs', { deep: true }).fetch()
    // this.content.sort((a, b) => a.slug.localeCompare(b.slug, undefined, { sensitivity: 'base' }))
    this.content.sort((a, b) => Number(a.slug.split('.').shift()) - Number(b.slug.split('.').shift()))

    if (process.env.NODE_ENV === 'development') console.log('CONTENT', this.content)
  },
  data() {
    return {
      content: null,
      appStoreUrl: 'https://testflight.apple.com/join/wiic7QIW',
      dockerHubUrl: 'https://hub.docker.com/r/advplyr/audiobookshelf',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.audiobookshelf.app',
      githubUrl: 'https://github.com/advplyr/audiobookshelf',
      discordUrl: 'https://discord.gg/pJsjuNCKRq'
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
