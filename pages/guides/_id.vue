<template>
  <article class="prose prose-invert prose-sm md:prose-base max-w-5xl mx-auto py-8 md:py-12 px-2">
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />

    <div v-if="otherPages.length" class="mt-8">
      <ul class="list-decimal">
        <li v-for="p in otherPages" :key="p.slug" class="text-sm">
          <nuxt-link :to="p.fullpath" class="text-slate-100">{{ p.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  layout: 'guides',
  async asyncData({ $content, params }) {
    const slug = params.id || 'index'

    let page = null
    let otherPages = []
    if (!params.id) {
      const results = await $content('guides').fetch()
      page = results.find((p) => p.slug === 'index')
      otherPages = results.filter((p) => p.slug !== 'index').sort((a, b) => a.title.localeCompare(b.title))
    } else {
      const results = await $content('guides').where({ slug }).fetch()
      page = results[0]
    }

    return {
      page,
      otherPages
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