<template>
    <div id="install-docker-compose" class="py-10 md:py-20">
        <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
            <nuxt-link to="#install-docker-compose"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
            >Docker-compose
        </h1>

        <p class="mb-2 text-sm md:text-base">Multi-architecture image for amd64, arm64 and arm/v7</p>

        <pre>
            <code class="language-bash">version: "3.7"
services:
  audiobookshelf:
    image: ghcr.io/advplyr/audiobookshelf:latest
    environment:
      - AUDIOBOOKSHELF_UID=99
      - AUDIOBOOKSHELF_GID=100
    ports:
      - 13378:80
    volumes:
      - &#60;/path/to/your/audiobooks&#62;:/audiobooks
      - &#60;/path/to/your/podcasts&#62;:/podcasts
      - &#60;/path/to/config&#62;:/config
      - &#60;/path/to/metadata&#62;:/metadata
            
            </code>
        </pre>

        <p class="text-error">Note: Volume mappings should all be separate directories that are not contained in eachother.</p>
        <!-- <p class="text-warning py-1">Unraid users: it is recommended that you map <span class="font-mono">/config</span> and <span class="font-mono">/metadata</span> to <span class="font-mono">/mnt/user/appdata/audiobookshelf/config</span> and <span class="font-mono">/mnt/user/appdata/audiobookshelf/metadata</span> respectively.</p> -->

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