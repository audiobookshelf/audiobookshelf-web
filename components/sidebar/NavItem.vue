<template>
  <nuxt-link
    :to="`${subpath}${hash}`"
    class="px-4 py-1.5 text-sm font-semibold block mr-6"
    :class="{ 'bg-white bg-opacity-10 rounded-r-full text-yellow-400': selected, 'text-gray-300 hover:text-white': !selected }"
  >
      {{ text }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    subpath: String,
    hash: String,
    text: String,
    selected: Boolean
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>