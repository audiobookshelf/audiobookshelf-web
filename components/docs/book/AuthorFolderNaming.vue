<template>
  <div id="book-author-folder" class="not-prose">
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

<style scoped>
p {
  margin: 0px;
}
img {
  margin: 0px;
}
</style>