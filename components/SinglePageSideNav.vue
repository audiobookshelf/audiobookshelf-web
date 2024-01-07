<template>
  <div class="w-72 z-50 overflow-y-auto fixed top-0 left-0 h-full bg-primary border-r border-white border-opacity-25 transform transition-transform" :class="drawerOpen ? 'translate-x-0' : '-translate-x-72'" v-click-outside="clickOutside">
    <div class="flex justify-center items-center py-4 mb-6">
      <nuxt-link to="/" class="h-12 w-12 -ml-4">
        <img src="/Logo48.png" class="h-full w-full" />
      </nuxt-link>
      <nuxt-link to="/" class="text-2xl pl-2 sm:pl-4 font-book hover:underline">audiobookshelf</nuxt-link>
    </div>

    <template v-for="category in pageGrouping">
      <div :key="category.title">
        <p v-if="category.title !== 'Introduction'" class="px-4 py-1 text-xs font-bold text-white uppercase mt-6 mb-1">{{ category.title }}</p>

        <sidebar-nav-item v-for="item in category.pages" :key="item.hash" :subpath="$route.path" :hash="item.hash" :text="item.title" :selected="currentHash === item.hash" />
      </div>
    </template>
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
    return {
      currentHash: null
    }
  },
  watch: {
    '$route.hash'(newVal) {
      if (newVal) {
        this.scrollTo(newVal)
        this.currentHash = newVal
      }
    }
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
    },
    pageGrouping() {
      const group = {}
      this.content.forEach((c) => {
        if (!group[c.category]) {
          group[c.category] = {
            title: c.category,
            pages: [c]
          }
        } else {
          group[c.category].pages.push(c)
        }
      })
      return group
    }
  },
  methods: {
    clickOutside() {
      if (!this.isMobile) return
      this.drawerOpen = false
    },
    scrollTo(hashtag) {
      const element = document.querySelector(hashtag)
      if (element) {
        element.scrollIntoView()
      }
    },
    onScroll(evt) {
      const clientHeight = evt.target.clientHeight
      const scrollTop = evt.target.scrollTop
      const scrollHeight = evt.target.scrollHeight

      // Bottom of page
      const bottomY = scrollHeight - scrollTop - clientHeight
      if (bottomY < 200) {
        const lastItem = this.content[this.content.length - 1]
        if (lastItem.hash !== this.currentHash) {
          this.currentHash = lastItem.hash
        }

        return
      }

      let closestItem = null
      for (let i = 0; i < this.content.length; i++) {
        const item = this.content[i]
        const div = document.querySelector(item.hash)
        if (!div) {
          console.error('Item not found', item)
          return
        }
        const box = div.getBoundingClientRect()
        if (box.top >= 0 && box.top < window.innerHeight) {
          closestItem = item
          break
        }
      }

      if (closestItem && closestItem.hash !== this.currentHash) {
        this.currentHash = closestItem.hash
      }
    }
  },
  mounted() {
    window['docs-content'].addEventListener('scroll', this.onScroll)
    setTimeout(() => {
      if (this.$route.hash) {
        this.scrollTo(this.$route.hash)
        this.currentHash = this.$route.hash
      } else {
        this.currentHash = '#intro'
      }
    }, 100)
  },
  beforeDestroy() {
    window['docs-content'].removeEventListener('scroll', this.onScroll)
  }
}
</script>