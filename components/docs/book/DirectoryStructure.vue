<template>
  <div id="book-structure" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#book-structure"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Book Directory Structure
    </h1>

    <p class="mb-4 text-sm md:text-base">Here is an example supported directory structure</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Terry Goodkind</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Author</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Sword of Truth</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Series</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Vol 1 - 1994 - Wizards First Rule</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio Track 1.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio Track 2.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">crop_original</span>
        <p class="pl-2">Cover.jpg</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Vol 2 - 1995 - Stone of Tears</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audiobook.m4b</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Heart of Black Ice - Sister of Darkness</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio File.m4a</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Steven Levy</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Author</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Hackers - Heroes of the Computer Revolution</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio File.m4a</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1945 - Animal Farm</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audiobook.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Animal Farm.m4b</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title<span class="text-warning">*</span></span>
      </div>
    </div>

    <p class="my-4 text-sm md:text-base"><span class="text-warning">*</span> Audio files in the root of the folder will each be treated as audiobooks.</p>
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