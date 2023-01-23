<template>
  <div class="w-screen h-screen max-w-full max-h-screen text-white bg-gradient overflow-hidden">
    <div class="fixed top-0 left-0 w-full h-16 shadow-lg bg-primary flex px-4 items-center">
      <nuxt-link to="/" class="h-12 w-12">
        <img src="/Logo48.png" class="h-12 w-12" />
      </nuxt-link>
      <nuxt-link to="/" class="text-2xl pl-2 sm:pl-4 font-book hover:underline hidden lg:block">audiobookshelf</nuxt-link>

      <nuxt-link to="/docs" class="h-full px-3 lg:px-5 ml-2 lg:ml-12 flex items-center cursor-pointer" :class="routeName === 'docs' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg hidden md:block">Documentation</p>
        <p class="text-base md:text-lg md:hidden">Docs</p>
      </nuxt-link>
      <nuxt-link to="/guides" class="h-full px-3 lg:px-5 flex items-center cursor-pointer" :class="routeName === 'guides' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg">Guides</p>
      </nuxt-link>
      <nuxt-link to="/support" class="h-full px-3 lg:px-5 items-center cursor-pointer flex" :class="routeName === 'support' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg hidden md:block">How to Support</p>
        <p class="text-base md:text-lg md:hidden">Support</p>
      </nuxt-link>
      <nuxt-link to="/showcase" class="h-full px-3 lg:px-5 items-center cursor-pointer hidden md:flex" :class="routeName === 'showcase' ? 'bg-bg bg-opacity-50 text-white' : 'hover:text-white hover:bg-bg hover:bg-opacity-50 text-gray-300'">
        <p class="text-base md:text-lg">Showcase</p>
      </nuxt-link>

      <div class="flex-grow" />

      <a :href="matrixUrl" aria-label="Join discussion in Matrix space" class="mx-2 hidden md:block">
        <img src="/matrix.svg" class="h-5 md:h-7 hover:scale-110 transform duration-100" />
      </a>
      <a :href="discordUrl" aria-label="Join discussion in Discord" class="mx-2 hidden md:block">
        <img src="/discord.svg" class="h-5 md:h-7 hover:scale-110 transform duration-100" />
      </a>
      <a :href="dockerHubUrl" aria-label="Audiobookshelf on DockerHub" class="mx-2 hidden md:block">
        <img src="/docker.svg" class="h-8 hover:scale-110 transform duration-100" />
      </a>
      <a :href="githubUrl" aria-label="Code on GitHub" class="hidden md:block">
        <img src="/github.svg" class="h-7 hover:scale-110 transform duration-100 mx-1 sm:mx-2" />
      </a>
      <a :href="playStoreUrl" aria-label="Audiobookshelf for Android on Google Play" class="hidden lg:block">
        <img src="/GetGooglePlayStore.png" class="h-7 ml-2" />
      </a>
      <a :href="appStoreUrl" aria-label="Audiobookshelf for iOS on Apple App Store" class="hidden lg:block">
        <img src="/AppleAppStoreDark.svg" class="h-7 ml-2" />
      </a>
    </div>
    <div class="page-container w-screen pt-16">
      <div class="w-full h-full overflow-y-auto">
        <Nuxt />
        <div class="w-full h-8 flex items-center text-xs text-gray-300 bg-primary px-4">
          <nuxt-link to="/privacy-policy" class="font-mono underline text-blue-200 hover:text-blue-100 text-sm">Privacy Policy</nuxt-link>
          <div class="flex-grow" />
          <a href="mailto:advplyr@protonmail.com" class="font-mono underline text-blue-200 hover:text-blue-100 text-sm hidden md:block">advplyr@protonmail.com</a>

          <a href="https://github.com/advplyr" target="_blank" class="font-mono underline text-blue-200 hover:text-blue-100 text-sm ml-4">https://github.com/advplyr</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appStoreUrl: 'https://testflight.apple.com/join/wiic7QIW',
      dockerHubUrl: 'https://hub.docker.com/r/advplyr/audiobookshelf',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.audiobookshelf.app',
      githubUrl: 'https://github.com/advplyr/audiobookshelf',
      discordUrl: 'https://discord.gg/pJsjuNCKRq',
		matrixUrl: 'https://matrix.to/#/#audiobookshelf:matrix.org'
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
