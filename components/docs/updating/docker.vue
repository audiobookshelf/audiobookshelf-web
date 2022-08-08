<template>
  <div id="updating-docker" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#updating-docker"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
        >Docker
    </h1>

    <p class="mb-2 text-sm md:text-base">To update your Docker container to the latest version run the following commands</p>

    <pre>
    <code class="language-bash">docker stop audiobookshelf
docker rm audiobookshelf
docker image prune -a
docker pull ghcr.io/advplyr/audiobookshelf:latest
# then use initial run command again</code>
    </pre>

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