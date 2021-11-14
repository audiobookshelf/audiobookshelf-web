<template>
  <div class="w-screen h-screen max-w-full max-h-screen text-white bg-gradient overflow-hidden">
    <div class="fixed top-0 left-0 w-full h-16 shadow-lg bg-primary flex px-4 items-center">
      <nuxt-link to="/" class="h-12 w-12">
        <img src="/Logo48.png" class="h-12 w-12" />
      </nuxt-link>
      <nuxt-link to="/" class="text-2xl pl-2 sm:pl-4 font-book hover:underline hidden md:block">audiobookshelf</nuxt-link>
      <!-- <div class="flex-grow" /> -->
      <nuxt-link to="/install" class="h-full px-3 md:px-5 flex items-center ml-2 md:ml-12 cursor-pointer" :class="routeName === 'install' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg">Install</p>
      </nuxt-link>
      <nuxt-link to="/docs" class="h-full px-3 md:px-5 flex items-center cursor-pointer" :class="routeName === 'docs' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg hidden md:block">Documentation</p>
        <p class="text-base md:text-lg md:hidden">Docs</p>
      </nuxt-link>
      <nuxt-link to="/showcase" class="h-full px-3 md:px-5 items-center cursor-pointer flex" :class="routeName === 'showcase' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg">Showcase</p>
      </nuxt-link>
      <div class="flex-grow" />
      <a :href="dockerHubUrl">
        <img src="/docker.svg" class="h-8 text-white" />
      </a>
      <a :href="githubUrl">
        <img src="/github.svg" class="h-7 text-white mx-1 sm:mx-3" />
      </a>
      <a :href="playStoreUrl" class="hidden md:block">
        <img src="/GetGooglePlayStore.png" class="h-7 ml-2" />
      </a>
    </div>
    <div class="page-container w-screen pt-16">
      <div class="w-full h-full overflow-y-auto">
        <Nuxt />
        <div class="w-full h-8 flex items-center text-xs text-gray-300 bg-primary px-4">
          <a href="mailto:advplyr@protonmail.com" class="font-mono underline text-blue-200 hover:text-blue-100 text-sm">advplyr@protonmail.com</a>
          <div class="flex-grow" />
          <a href="https://github.com/advplyr" target="_blank" class="font-mono underline text-blue-200 hover:text-blue-100 text-sm">https://github.com/advplyr</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dockerHubUrl: 'https://hub.docker.com/repository/docker/advplyr/audiobookshelf',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.audiobookshelf.app',
      githubUrl: 'https://github.com/advplyr/audiobookshelf'
    }
  },
  watch: {
    '$route.hash'(newVal) {
      if (newVal) {
        this.scrollTo(newVal)
      }
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  methods: {
    scrollTo(hashtag) {
      location.href = hashtag
    }
  },
  mounted() {
    if (this.$route.hash) {
      this.scrollTo(this.$route.hash)
    }
  }
}
</script>

<style>
html,
body {
  overflow: hidden;
}
.page-container {
  height: calc(100%);
  max-height: calc(100%);
}
</style>