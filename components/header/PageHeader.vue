<template>
  <div class="flex items-center py-1">
    <nuxt-link v-if="!hasContent" to="/" class="h-8 w-8 md:hidden mx-1.5">
      <img src="/favicon.ico" class="h-full w-full" />
    </nuxt-link>
    <button v-else class="h-8 w-8 sm:hidden mx-1.5 flex items-center justify-center" @click.stop="clickMobileMenu">
      <span class="material-icons">menu</span>
    </button>

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

    <div class="flex-grow" />

    <nuxt-link to="/docs" class="text-base md:text-lg font-semibold hover:text-white hover:underline mx-1.5 md:mx-4" :class="routeName === 'docs' ? 'text-yellow-400' : 'text-gray-300'">Docs</nuxt-link>
    <nuxt-link to="/guides" class="text-base md:text-lg font-semibold hover:text-white hover:underline mx-1.5 md:mx-4" :class="routeName === 'guides-id' ? 'text-yellow-400' : 'text-gray-300'">Guides</nuxt-link>
    <nuxt-link to="/faq" class="text-base md:text-lg font-semibold hover:text-white hover:underline mx-1.5 md:mx-4" :class="routeName === 'faq-id' ? 'text-yellow-400' : 'text-gray-300'">FAQ</nuxt-link>
    <nuxt-link to="/support" class="text-base md:text-lg font-semibold hover:text-white hover:underline mx-1.5 md:mx-4" :class="routeName === 'support' ? 'text-yellow-400' : 'text-gray-300'">Support</nuxt-link>
    <nuxt-link to="/showcase" class="text-base md:text-lg font-semibold hover:text-white hover:underline mx-1.5 md:mx-4" :class="routeName === 'showcase' ? 'text-yellow-400' : 'text-gray-300'">Showcase</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    hasContent: Boolean,
    isMobile: Boolean
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
  computed: {
    routeName() {
      return this.$route.name
    }
  },
  methods: {
    clickMobileMenu() {
      this.$emit('openDrawer')
    }
  },
  mounted() {}
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
