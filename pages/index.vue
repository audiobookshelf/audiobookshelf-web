<template>
  <div ref="wrapper" class="w-full h-full bg-gradient overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-screen pointer-events-none max-h-screen max-w-screen overflow-hidden">
      <template v-for="(shelf, index) in shelves">
        <div :key="index" class="bookshelfRow w-full flex relative h-32 md:h-48 px-2 md:px-8">
          <template v-for="(book, n) in shelf">
            <div :key="`book-${n}`" class="h-full pt-5 md:pt-4 px-1.5 md:px-3 transition-opacity duration-300" :class="showBooks ? '' : 'opacity-0'">
              <div class="h-24 w-24 md:h-40 md:w-40 relative bg-primary">
                <img :src="`/covers/${book}`" class="absolute top-0 left-0 h-full w-full object-contain box-shadow-book z-10" />
              </div>
            </div>
          </template>
          <div class="bookshelfDivider h-3 md:h-4 w-full absolute bottom-0 left-0 right-0 z-10" />
        </div>
      </template>
      <div class="absolute top-0 left-0 w-full h-full overlay z-20" />
    </div>
    <div class="absolute top-0 left-0 w-full h-full z-30">
      <div class="absolute bottom-0 left-0 w-10 h-10" @dblclick.prevent="animatePage" />

      <div key="homePage" class="h-full flex flex-col items-center justify-center">
        <img ref="logo" src="/Logo.png" class="h-28 md:h-40" />
        <h1 ref="title" class="text-white text-4xl md:text-6xl pt-4 md:pt-8 font-book">audiobookshelf</h1>
        <p ref="subtitle" class="text-gray-300 text-center text-sm md:text-lg pt-4">Self-hosted audiobook and podcast server</p>
      </div>

      <div class="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-right">
        <nuxt-link to="/install" class="text-gray-200 text-lg md:text-3xl font-book py-1 md:py-2 hover:underline block">Install Guide</nuxt-link>
        <nuxt-link to="/docs" class="text-gray-200 text-lg md:text-3xl font-book py-1 md:py-2 hover:underline block">Documentation</nuxt-link>
        <nuxt-link to="/support" class="text-gray-200 text-lg md:text-3xl font-book py-1 md:py-2 hover:underline block">How to Support</nuxt-link>

        <div class="flex items-center pt-4 md:pt-8 text-gray-300">
          <a :href="discordUrl" class="mx-2">
            <img src="/discord.svg" class="h-7 md:h-9 hover:scale-110 transform duration-100" />
          </a>
          <a :href="dockerHubUrl" class="mx-2">
            <img src="/docker.svg" class="h-8 md:h-11 hover:scale-110 transform duration-100" />
          </a>
          <a :href="githubUrl" class="mx-2">
            <img src="/github.svg" class="h-7 md:h-10 hover:scale-110 transform duration-100" />
          </a>
          <a :href="playStoreUrl" :class="['mx-2', 'app-icon-android', currentMobileDeviceClass]">
            <img src="/GetGooglePlayStore.png" class="h-7 md:h-10" />
          </a>
          <a :href="appStoreUrl" :class="['ml-2', 'app-icon-ios', currentMobileDeviceClass]">
            <img src="/AppleAppStoreDark.svg" class="h-7 md:h-10" />
          </a>
          <!-- <img src="/GetAppleAppStore.png" class="h-7 ml-1" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      showBooks: false,
      showInstall: false,
      appStoreUrl: 'https://testflight.apple.com/join/wiic7QIW',
      dockerHubUrl: 'https://hub.docker.com/r/advplyr/audiobookshelf',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.audiobookshelf.app',
      githubUrl: 'https://github.com/advplyr/audiobookshelf',
      discordUrl: 'https://discord.gg/pJsjuNCKRq',
      covers: [
        '1984.jpg',
        'anatomyofthestate.jpg',
        'animalfarm.jpg',
        'atlasshrugged.jpg',
        'democracythegodthatfailed.jpg',
        'theroadtoserfdom.jpg',
        'faithofthefallen.jpg',
        'endersgame.jpg',
        'wealthofnations.jpg',
        'hackers.jpg',
        'foranewliberty.jpg',
        'bravenewworld.jpg',
        'fahrenheit451.jpg',
        'rulesforradicals.jpg',
        'humanaction.jpg',
        'economicsinonelesson.jpg',
        'thecommunistmanifesto.jpg',
        'warandpeace.jpg',
        'anthem.jpg',
        'anarchystateandutopia.jpg',
        'theanarchisthandbook.jpg',
        'thecreaturefromjekyllisland.jpg',
        'theidiot.jpg',
        'thefountainhead.jpg',
        'themachineryoffreedom.jpg',
        'endurance.jpg',
        'thelaw.jpg',
        'notreason.jpg',
        'endthefed.jpg',
        'amanforallmarkets.jpg',
        'thebookoffiverings.jpg',
        'warisaracket.jpg',
        'theprince.jpg',
        'maneconomyandstate.jpg',
        'theoryofsocialismandcapitalism.jpg',
        'onliberty.jpg',
        'themanversusthestate.png'
      ],
      shelves: [],
      device: {
        android: false,
        ios: false
      }
    }
  },
  computed: {
    currentMobileDeviceClass() {
      return [this.device.ios && 'device-ios', this.device.android && 'device-android'].filter((i) => !!i)
    }
  },
  methods: {
    async animatePage() {
      if (this.$refs.logo) {
        this.$refs.logo.classList.add('animate-roll')
      }
      if (this.$refs.title) {
        this.$refs.title.classList.add('animate-drop')
      }
      if (this.$refs.subtitle) {
        this.$refs.subtitle.classList.add('animate-drop-pause')
      }
      var opacity2 = 0
      var opacity1 = 0

      this.showInstall = true

      while (opacity2 < 1 || opacity1 < 1) {
        document.documentElement.style.setProperty('--overlay-gradient', `rgba(48, 48, 48, ${opacity1}) 0%, rgba(39, 39, 39, ${opacity2}) 36%, rgba(46, 46, 46, 1) 50%, rgba(48, 48, 48, 1) 71%, rgba(34, 34, 34, 1) 86%, rgba(25, 25, 25, 1) 100%`)
        opacity2 = Math.min(1, opacity2 + 0.02)
        if (opacity2 > 0.5) {
          opacity1 = Math.min(1, opacity1 + 0.02)
        }
        await new Promise((resolve) => setTimeout(resolve, 5))
      }
    },
    getCoverWidth() {
      if (window.innerWidth < 768) return 96 + 12
      return 160 + 24
    },
    getShelfHeight() {
      if (window.innerWidth < 768) return 128
      return 192
    },
    setShelves() {
      var coverWidth = this.getCoverWidth()
      var shelfHeight = this.getShelfHeight()
      var numCoversPerShelf = Math.ceil(window.innerWidth / coverWidth)
      var numShelvesPerPage = Math.ceil(window.innerHeight / shelfHeight)
      this.shelves = []
      var index = 0
      for (let i = 0; i < numShelvesPerPage; i++) {
        var shelf = []
        for (let y = 0; y < numCoversPerShelf; y++) {
          var cover = this.covers[index % this.covers.length]
          shelf.push(cover)
          index++
        }
        this.shelves.push(shelf)
      }
    },

    windowLoaded() {
      this.showBooks = true
      this.setShelves()
    },
    resize() {
      this.setShelves()
    }
  },
  mounted() {
    var width = window.innerWidth
    var height = window.innerHeight

    var angle = Math.atan(height / width)
    var deg = angle * (180 / Math.PI) + 180
    document.documentElement.style.setProperty('--angle', '-' + deg + 'deg')

    this.device.ios = /(iPad|iPhone|iPod)/i.test(window.navigator.platform)
    this.device.android = /(android)/i.test(window.navigator.userAgent)

    if (document.readyState === 'complete') {
      this.windowLoaded()
    }
  },
  beforeMount() {
    window.addEventListener('load', this.windowLoaded)
    window.addEventListener('resize', this.resize)
  },
  beforeDestroy() {
    window.removeEventListener('load', this.windowLoaded)
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style>
:root {
  --overlay-gradient: rgba(48, 48, 48, 0) 0%, rgba(39, 39, 39, 0) 36%, rgba(46, 46, 46, 1) 50%, rgba(48, 48, 48, 1) 71%, rgba(34, 34, 34, 1) 86%, rgba(25, 25, 25, 1) 100%;
}
.bookshelfRow {
  background-image: url(/wood_panels.jpg);
}
.bookshelfDivider {
  background: rgb(149, 119, 90);
  background: linear-gradient(180deg, rgba(149, 119, 90, 1) 0%, rgba(103, 70, 37, 1) 17%, rgba(103, 70, 37, 1) 88%, rgba(71, 48, 25, 1) 100%);
  box-shadow: 2px 14px 8px #111111aa;
}
.overlay {
  background: rgb(48, 48, 48);
  background: linear-gradient(var(--angle), var(--overlay-gradient));
}
.box-shadow-book {
  box-shadow: 4px 1px 8px #11111166, -4px 1px 8px #11111166, 1px -4px 8px #11111166;
}

.animate-roll {
  animation: roll 1s cubic-bezier(0.47, 0, 0.745, 0.715);
  animation-fill-mode: forwards;
}

@keyframes roll {
  from {
    transform: translate(0px, 0px) rotate(0deg);
  }
  to {
    transform: translate(60vw, 0px) rotate(1280deg);
  }
}

/* if we're on an ios device, hide the android app icon */
.app-icon-android.device-ios {
  display: none;
}

/* and the opposite for ios */
.app-icon-ios.device-android {
  display: none;
}

.animate-drop {
  animation: drop 1s ease-in;
  animation-fill-mode: forwards;
}
.animate-drop-pause {
  animation: drop 1s ease-in 0.05s;
  animation-fill-mode: forwards;
}

@keyframes drop {
  from {
    transform: translate(0px, 0px);
  }
  to {
    transform: translate(0px, 100vh);
  }
}
</style>
