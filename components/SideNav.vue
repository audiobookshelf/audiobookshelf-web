<template>
  <div class="fixed top-0 left-0 h-full bg-primary border-r border-white border-opacity-25 w-72 transform transition-transform z-50" :class="drawerOpen ? 'translate-x-0' : '-translate-x-72'" v-click-outside="clickOutside">
    <div class="flex justify-center items-center py-4 mb-6">
      <nuxt-link to="/" class="h-12 w-12 -ml-4">
        <img src="/Logo48.png" class="h-full w-full" />
      </nuxt-link>
      <nuxt-link to="/" class="text-2xl pl-2 sm:pl-4 font-book hover:underline">audiobookshelf</nuxt-link>
    </div>
    <nuxt-link v-for="item in content" :key="item.slug" :to="item.fullpath" class="px-4 py-1.5 text-sm font-semibold block mr-6 mb-2" :class="item.fullpath === routePath ? 'bg-white bg-opacity-10 rounded-r-full text-yellow-400' : 'text-gray-300 hover:text-white'">{{ item.title }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: Boolean,
    isOpen: {
      type: Boolean,
      default: true
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {
    drawerOpen: {
      get() {
        return this.isOpen
      },
      set(val) {
        this.$emit('update:isOpen', val)
      }
    },
    routePath() {
      const routePath = this.$route.path || ''
      return routePath.replace(/\/$/, '')
    }
  },
  methods: {
    clickOutside() {
      if (!this.isMobile) return
      this.drawerOpen = false
    }
  },
  mounted() {}
}
</script>