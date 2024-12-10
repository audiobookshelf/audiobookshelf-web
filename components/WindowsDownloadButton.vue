<template>
  <a v-if="windowsDownloadUrl" :href="windowsDownloadUrl" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded no-underline"> Download Latest Release ({{ windowsLatestReleaseName }})</a>
</template>

<script>
export default {
  computed: {
    windowsDownloadUrl() {
      return this.$store.state.windowsDownloadUrl
    },
    windowsLatestReleaseName() {
      return this.$store.state.windowsLatestReleaseName
    }
  }
}
</script>