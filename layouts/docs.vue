<template>
  <div class="w-screen h-screen max-w-full max-h-screen text-white bg-gradient overflow-hidden">
    <div id="sidebar" class="hidden md:block fixed top-0 left-0 h-full bg-primary border-r border-white border-opacity-25">
      <div class="flex justify-center items-center py-4 mb-6">
        <nuxt-link to="/" class="h-12 w-12 -ml-4">
          <img src="/Logo48.png" class="h-full w-full" />
        </nuxt-link>
        <nuxt-link to="/" class="text-2xl pl-2 sm:pl-4 font-book hover:underline">audiobookshelf</nuxt-link>
      </div>

      <sidebar-nav-item v-for="item in introItems" :key="item.hash" :hash="item.hash" :text="item.text" :selected="currentHash === item.hash" />

      <p class="px-4 py-1 text-xs font-bold text-white uppercase mt-6 mb-1">Books</p>

      <sidebar-nav-item v-for="item in bookItems" :key="item.hash" :hash="item.hash" :text="item.text" :selected="currentHash === item.hash" />

      <p class="px-4 py-1 text-xs font-bold text-white uppercase mt-6 mb-1">Podcasts</p>

      <sidebar-nav-item v-for="item in podcastItems" :key="item.hash" :hash="item.hash" :text="item.text" :selected="currentHash === item.hash" />
    </div>
    <div id="docs-content" class="overflow-y-auto max-w-full overflow-x-hidden">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastScrollTop: 0,
      introItems: [
        {
          hash: '#intro',
          text: 'Introduction'
        }
      ],
      bookItems: [
        {
          hash: '#book-structure',
          text: 'Directory Structure'
        },
        {
          hash: '#book-author-folder',
          text: 'Author Folder Naming'
        },
        {
          hash: '#book-title-folder',
          text: 'Title Folder Naming'
        },
        {
          hash: '#book-audio-metadata',
          text: 'Audio Metadata'
        },
        {
          hash: '#book-additional-metadata',
          text: 'Additional Metadata'
        },
        {
          hash: '#book-tracks',
          text: 'Audio Tracks'
        }
      ],
      podcastItems: [
        {
          hash: '#podcast-structure',
          text: 'Directory Structure'
        }
      ],
      currentHash: null
    }
  },
  computed: {},
  watch: {
    $route(newVal, oldVal) {
      console.log('Route updated', newVal, oldVal)
    },
    '$route.hash'(newVal) {
      console.log('Update hash', newVal)
      if (newVal) {
        this.scrollTo(newVal)
        this.currentHash = newVal
      }
    }
  },
  methods: {
    scrollTo(hashtag) {
      location.href = hashtag
    },
    onScroll(evt) {
      // const scrollingUp = evt.target.scrollTop - this.lastScrollTop < 0
      // this.lastScrollTop = evt.target.scrollTop

      const allItems = this.introItems.concat(this.bookItems).concat(this.podcastItems)

      var closestItem = null
      for (let i = 0; i < allItems.length; i++) {
        const item = allItems[i]
        var div = document.querySelector(item.hash)
        var box = div.getBoundingClientRect()

        if (box.top > 0 && box.top < 100) {
          closestItem = item
          break
        }
      }

      if (closestItem && closestItem.hash !== this.currentHash) {
        history.pushState({}, '', closestItem.hash)
        this.currentHash = closestItem.hash
      }
    }
  },
  mounted() {
    window['docs-content'].addEventListener('scroll', this.onScroll)
    if (this.$route.hash) {
      this.scrollTo(this.$route.hash)
      this.currentHash = this.$route.hash
    } else {
      this.currentHash = '#intro'
    }
  },
  beforeDestroy() {
    window['docs-content'].removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
:root {
  --sidebar-width: 280px;
}

#sidebar {
  width: var(--sidebar-width);
}
#docs-content {
  margin-left: var(--sidebar-width);
  height: 100vh;
}
@media (max-width: 767px) {
  #docs-content {
    margin-left: 0px;
    height: 100vh;
  }
}
</style>