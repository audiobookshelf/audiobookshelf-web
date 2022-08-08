<template>
  <article class="prose prose-sm md:prose-base max-w-5xl mx-auto dark:prose-invert py-8 md:py-12 px-2">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const page = await $content(params.id).fetch()
    return {
      page
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {
    if (typeof Prism !== undefined) {
      Prism.highlightAll()
    }
  }
}
</script>

<style>
.prose :where(code):not(:where([class~=not-prose]*))::before {
    content: "";
}
</style>