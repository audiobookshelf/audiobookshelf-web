<template>
  <div id="book-author-folder" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#book-author-folder"><span class="material-icons text-lg text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Author Folder Naming
    </h1>

    <p class="mb-4 text-sm md:text-base">Supports "Last, First" author naming as well as multiple authors separated by "," or "&".<br /><br />Valid author folder names:</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Ichiro Kishimi</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Kishimi, Ichiro</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Ichiro Kishimi, Fumitake Koga</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Kishimi, Ichiro, Koga, Fumitake</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Ichiro Kishimi & Fumitake Koga</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Kishimi, Ichiro & Koga, Fumitake</p>
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