<template>
  <div class="w-full max-w-5xl mx-auto h-full px-2 py-8">
    <div class="flex -ml-8">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">Default username is "root" with no password.</p>
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="docker" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#docker"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker Install
    </h1>
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