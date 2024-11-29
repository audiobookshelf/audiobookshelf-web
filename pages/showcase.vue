<template>
  <div class="w-full max-w-5xl mx-auto px-2 py-8 min-h-full">
    <div class="flex -ml-8 mb-6">
      <div>
        <span class="material-icons text-warning text-xl">priority_high</span>
      </div>
      <div>
        <p class="pl-2 text-base mb-2">Check out the web client demo: <a href="https://audiobooks.dev/" target="_blank" class="text-blue-500 underline">https://audiobooks.dev/</a> (thanks for hosting <a href="https://github.com/Vito0912" target="_blank" class="text-blue-500 underline">@Vito0912</a>!)</p>
        <p class="pl-2">Username/password: <code>demo/demo</code> (user account)</p>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div v-for="image in images" :key="image.title" class="w-full md:w-1/2 p-2">
        <div>
          <p class="text-sm mb-2 text-gray-200">{{ image.title }}</p>
          <img :src="image.src" class="cursor-pointer" @click="showImage(image)" />
        </div>
      </div>
    </div>

    <div v-if="showImageModal" class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center" @click="showImageModal = false">
      <div class="w-full h-full">
        <img :src="selectedImage.src" class="w-full h-full object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guides',
  data() {
    return {
      showImageModal: false,
      selectedImage: null,
      images: [
        {
          src: '/showcase/home-books.png',
          title: 'Home page'
        },
        {
          src: '/showcase/library-books.png',
          title: 'Library view'
        },
        {
          src: 'https://github.com/advplyr/audiobookshelf/raw/master/images/DemoLibrary.png',
          title: 'Library & player'
        },
        {
          src: '/showcase/series.png',
          title: 'Series view'
        },
        {
          src: '/showcase/podcasts.png',
          title: 'Podcast library'
        },
        {
          src: '/showcase/match-book.gif',
          title: 'Matching book metadata'
        },
        {
          src: '/showcase/library-stats.png',
          title: 'Library stats'
        },
        {
          src: '/showcase/user-stats.png',
          title: 'User stats'
        },
        {
          src: '/showcase/authors-page.png',
          title: 'Authors view'
        },
        {
          src: '/showcase/collections-page.png',
          title: 'Collections view'
        }
      ]
    }
  },
  computed: {},
  methods: {
    showImage(image) {
      this.selectedImage = image
      this.showImageModal = true
    }
  },
  mounted() {}
}
</script>
