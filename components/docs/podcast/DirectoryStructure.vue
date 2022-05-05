<template>
  <div id="podcast-structure" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#podcast-structure"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Podcast Directory Structure
    </h1>

    <p class="mb-4 text-sm md:text-base">Here is an example supported directory structure</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Lex Fridman Podcast</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">#219 – Donald Knuth.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">#252 – Elon Musk.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <span class="material-icons">crop_original</span>
        <p class="pl-2">Cover.jpg</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Self-Hosted</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">#69 - Get Off My Lawn.mp3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>