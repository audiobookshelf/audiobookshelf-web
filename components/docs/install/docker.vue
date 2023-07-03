<template>
  <div id="install-docker" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#install-docker"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker
    </h1>

    <p class="mb-2 text-sm md:text-base">Multi-architecture image for amd64, arm64 and arm/v7</p>

    <pre>
<code class="language-bash">
docker pull ghcr.io/advplyr/audiobookshelf

docker run -d \
  -p 13378:80 \
  -v &lt;/path/to/config>:/config \
  -v &lt;/path/to/metadata>:/metadata \
  -v &lt;/path/to/audiobooks>:/audiobooks \
  -v &lt;/path/to/podcasts>:/podcasts \
  --name audiobookshelf</code>
</pre>

    <p class="text-error">Note: Remember to change the path to your actual directory and remove the &#60;&#62; symbols</p>
    <p class="text-error">Note: Volume mappings should all be separate directories that are not contained in eachother</p>
    <p class="text-error">Note: Windows users will need to remove the \ and run this as a single line</p>

    <p class="mt-2 mb-1 font-semibold text-lg">Volume mappings</p>
    <p>• &nbsp;<span class="font-mono">/config</span> will contain the database (users/books/libraries/settings)</p>
    <p>• &nbsp;<span class="font-mono">/metadata</span> will contain cache, streams, covers, downloads, backups and logs</p>
    <p>• &nbsp;Map any other directories you want to use for your book and podcast collections (ebooks supported as experimental)</p>
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