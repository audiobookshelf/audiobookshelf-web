<template>
  <div id="intro" class="py-10 md:py-40">
    <div class="flex md:-ml-8 mb-8">
      <div>
        <span class="material-icons text-error text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-sm md:text-lg">Server v2.0.0 and higher is not backwards compatible with older mobile app versions! Make sure you are using server v2.0.0 and up with mobile apps v0.9.41-beta and up.</p>
    </div>

    <div class="flex md:-ml-8 mb-8">
      <div>
        <span class="material-icons text-success text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-sm md:text-lg">
        Help needed writing documentation! This website is on <a href="https://github.com/advplyr/audiobookshelf-web" target="_blank" class="text-blue-500 underline">github</a>. Join the <a href="https://github.com/advplyr/audiobookshelf/discussions" target="_blank" class="text-blue-500 underline">discussion</a>,
        <a href="https://github.com/advplyr/audiobookshelf/issues" target="_blank" class="text-blue-500 underline">report an issue</a> or contact me directly at <a href="mailto:advplyr@protonmail.com" class="text-blue-500 underline">advplyr@protonmail.com</a>.
      </p>
    </div>

    <p class="px-2 text-sm md:text-lg">
      Audiobookshelf works best when you have an organized directory structure like shown below. This is because information is taken from your folder names. This includes the author name, series name, book title, publish year, volume number, and subtitle. However, you can enable scanner settings to prefer using your audio file ID3 tags or an OPF file over using folder names.
    </p>
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