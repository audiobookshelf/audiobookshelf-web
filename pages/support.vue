<template>
  <div class="w-full max-w-5xl mx-auto h-full px-2 py-8">
    <div class="flex -ml-8 mb-4">
      <div>
        <span class="material-icons text-success text-2xl">star</span>
      </div>
      <p class="pl-2 text-base md:text-lg">
        The best way that <u>everyone</u> can show support is to follow/star the <a href="https://github.com/advplyr/audiobookshelf" target="_blank" class="text-blue-500 underline">github repo</a>, test new features, open a <a href="https://github.com/advplyr/audiobookshelf/discussions" target="_blank" class="text-blue-500 underline">discussion</a> with ideas on how to improve the project. Join
        the <a href="https://discord.gg/pJsjuNCKRq" target="_blank" class="text-blue-500 underline">discord server</a>.
      </p>
    </div>
    <div class="flex -ml-8">
      <div>
        <span class="material-icons text-gray-400 text-2xl">email</span>
      </div>
      <p class="pl-2 text-base md:text-lg"><a href="mailto:advplyr@protonmail.com" class="text-blue-500 underline">advplyr@protonmail.com</a></p>
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="docs" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#docs"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Help with docs & guides
    </h1>
    <p class="mb-4">As you can see, this documentation could really use some support. We could use help with..</p>

    <p class="mb-2 pl-4">- Guides on installing audiobookshelf via docker or the PPA.</p>

    <p class="mb-2 pl-4">- Guides on setting up audiobookshelf like adding libraries, reverse proxy, etc.</p>

    <p class="mb-2 pl-4">- Guides on how to run the server and mobile apps locally.</p>

    <p class="mb-2 pl-4">- Any other ideas you have to help the community get familiar with audiobookshelf.</p>

    <p class="my-4">If you want to contribute reach out via github, discord or email.</p>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="developers" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#developers"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Developers
    </h1>
    <p class="mb-2">This section will eventually give more info on setting up the project locally and contributing.</p>
    <p class="mb-2">See <a href="https://github.com/advplyr/audiobookshelf/discussions/259#discussioncomment-1869729" target="_blank" class="text-blue-500 underline">this discussion</a> on setting up the audiobookshelf server & web client.</p>
    <p class="mb-2">See <a href="https://github.com/advplyr/audiobookshelf-app#contributing" target="_blank" class="text-blue-500 underline">mobile app readme</a> for setting up the mobile app locally.</p>
    <p class="mb-2">PRs welcome and highly encouraged. Before working on an issue/feature you should post about it so we don't overlap.</p>
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