<template>
  <article class="prose prose-sm md:prose-base max-w-5xl mx-auto dark:prose-invert py-8 md:py-12 px-2">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'guides',
  async asyncData({ $content, params }) {
    const slug = params.id || 'index'
    const results = await $content().where({ slug }).fetch()
    return {
      page: results[0]
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
.prose :where(code):not(:where([class~='not-prose']*))::before {
  content: '';
}
.prose :where(code):not(:where([class~='not-prose']*))::after {
  content: '';
}
</style>