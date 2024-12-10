<template>
  <div class="w-full">
    <article v-for="page in content" :key="page.hash" :id="page.hash.slice(1)" class="prose prose-invert prose-sm md:prose-base max-w-5xl flex items-center" style="min-height: 60vh">
      <div class="px-2 py-8 md:py-20 max-w-full">
        <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
          <nuxt-link :to="page.hash"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
          >{{ page.title }}
        </h1>

        <nuxt-content :document="page" />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  async fetch() {
    this.content = await this.$content('docs', { deep: true }).fetch()
    this.content.sort((a, b) => Number(a.order) - Number(b.order))
  },
  data() {
    return {
      content: null
    }
  },
  computed: {},
  methods: {
    async getLatestWindowsRelease() {
      const data = await fetch('https://api.github.com/repos/mikiher/audiobookshelf-windows/releases/latest').then((res) => res.json())

      const windowsDownloadUrl = data?.assets?.find((asset) => asset.name.endsWith('.exe'))?.browser_download_url
      if (windowsDownloadUrl) {
        this.$store.commit('setWindowsDownloadUrl', windowsDownloadUrl)
      }

      if (data?.name) {
        this.$store.commit('setWindowsLatestReleaseName', data.name)
      }
    }
  },
  mounted() {
    if (typeof Prism !== undefined) {
      Prism.highlightAll()
    }
    this.getLatestWindowsRelease()
  }
}
</script>

<style>
table,
tr,
td,
th {
  border: 1px solid #666;
}
table td,
th {
  padding: 5px 15px;
}

.prose :where(code):not(:where([class~='not-prose']*))::before {
  content: '';
}
.prose :where(code):not(:where([class~='not-prose']*))::after {
  content: '';
}
.prose :where(blockquote):not(:where([class~='not-prose'] *)) {
  quotes: none;
  font-style: normal;
}
</style>
