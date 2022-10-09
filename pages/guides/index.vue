<template>
  <div></div>
</template>

<script>
export default {
  async asyncData({ $content, redirect }) {
    const all = await $content().fetch()
    return redirect(`/guides/${all[0].slug}`)
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>