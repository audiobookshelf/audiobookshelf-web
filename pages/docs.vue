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

      <nuxt-link to="/install" class="text-base md:text-lg font-semibold text-gray-200 hover:text-white hover:underline mx-1.5 md:mx-4">Install</nuxt-link>
      <nuxt-link to="/support" class="text-base md:text-lg font-semibold text-gray-200 hover:text-white hover:underline mx-1.5 md:mx-4">Support</nuxt-link>
      <nuxt-link to="/showcase" class="text-base md:text-lg font-semibold text-gray-200 hover:text-white hover:underline mx-1.5 md:mx-4">Showcase</nuxt-link>
    </div>

    <docs-introduction />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-install-docker />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-install-docker-compose />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-updating-docker />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-book-directory-structure />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-book-author-folder-naming />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-book-title-folder-naming />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-book-audio-metadata />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-book-additional-metadata-files />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-book-audio-tracks />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <docs-podcast-directory-structure />

  </div>
</template>

<script>
export default {
  layout: 'docs',
  data() {
    return {
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
</style>
