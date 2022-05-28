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

    <!-- <h1 id="abmetadata" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#abmetadata"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >abmetadata file
    </h1>

    <div class="flex -ml-8 mb-8">
      <div>
        <span class="material-icons text-success text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">This is the start of setting up a better standard around persisting audiobook metadata and is likely to change, so if you have suggestions around audiobook metadata please join the discord or start a github discussion. The abmetadata file format is based on ffmetadata.</p>
    </div>

    <p class="mb-4 text-sm md:text-base">
      As of v1.7.1 audiobookshelf creates a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">metadata.abs</span> for each library item. By default, the file will be saved in <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">/metadata/items/</span> folders, but can be stored in the same folder as your book/podcast by enabling the
      server setting.
    </p>

    <p class="mb-4 text-sm md:text-base">If this file is in your library item folders it will serve as the source of truth for your metadata details and overwrite them. If you have enabled the server settings to prefer OPF or prefer audio ID3 metadata, then those will take precedence during scans.</p> -->

    <!-- <div class="w-full bg-white bg-opacity-20 h-px my-8" /> -->
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
</style>