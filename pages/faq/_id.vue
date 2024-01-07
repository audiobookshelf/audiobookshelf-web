<template>
  <article class="prose prose-invert prose-sm md:prose-base max-w-5xl mx-auto py-8 md:py-12 px-2">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'guides',
  async asyncData({ $content, params }) {
    const slug = params.id || 'general'
    const results = await $content('faq').where({ slug }).fetch()
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
.md\:prose-base :where(tbody td:first-child, tfoot td:first-child):not(:where([class~='not-prose'] *)) {
  padding-left: 0.5714286em !important;
}
.md\:prose-base :where(thead th:first-child, tfoot th:first-child):not(:where([class~='not-prose'] *)) {
  padding-left: 0.5714286em !important;
}
</style>