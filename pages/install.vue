<template>
  <div class="w-full max-w-5xl mx-auto px-2 py-8">
    <div class="flex -ml-8">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">Default username is "root" with no password.</p>
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="docker" class="text-3xl mb-4">
      <nuxt-link to="#docker"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker Install
    </h1>

    <pre>
        <code class="language-bash">docker pull advplyr/audiobookshelf

docker run -d \
    -p 1337:80 \
    -v &lt;/path/to/audiobooks>:/audiobooks \
    -v &lt;/path/to/config>:/config \
    -v &lt;/path/to/metadata>:/metadata \
    --name audiobookshelf \
    --rm advplyr/audiobookshelf</code>
      </pre>

    <div class="w-full h-px bg-gray-400 my-6" />

    <br />

    <h1 id="linux" class="text-3xl mb-4">
      <nuxt-link to="#linux"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Linux Install
    </h1>

    <span class="text-error">Note: Only for amd64 architecture</span>
    <p class="mb-2 text-sm md:text-base">A few questions are asked during install to setup the initial config. <br />If you already have audiobooks, you can enter the path to your audiobooks during the install. The installer will create a user and group named audiobookshelf.</p>

    <br />

    <h2 id="ubuntu" class="text-2xl mb-2">
      <nuxt-link to="#ubuntu"><span class="material-icons text-lg text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Ubuntu Install (PPA)
    </h2>

    <pre>
        <code class="language-bash">curl -s --compressed "https://advplyr.github.io/audiobookshelf-ppa/KEY.gpg" | sudo apt-key add - 

sudo curl -s --compressed -o /etc/apt/sources.list.d/audiobookshelf.list "https://advplyr.github.io/audiobookshelf-ppa/audiobookshelf.list" 

sudo apt update 

sudo apt install audiobookshelf</code>
      </pre>

    <p class="text-lg">or use this one liner</p>
    <pre>
        <code class="language-bash">curl -s --compressed "https://advplyr.github.io/audiobookshelf-ppa/KEY.gpg" | sudo apt-key add - && sudo curl -s --compressed -o /etc/apt/sources.list.d/audiobookshelf.list "https://advplyr.github.io/audiobookshelf-ppa/audiobookshelf.list" && sudo apt update && sudo apt install audiobookshelf</code>
      </pre>

    <br />

    <h2 id="debian" class="text-2xl mb-2 mt-6">
      <nuxt-link to="#debian"><span class="material-icons text-lg text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >All other Linux Distros
    </h2>

    <p class="mb-4 text-sm md:text-base">Grab the latest debian package from the <a href="https://github.com/advplyr/audiobookshelf-ppa" target="_blank" class="underline text-blue-400 hover:text-blue-200">audiobookshelf-ppa</a> github repository, and install.</p>

    <pre>
        <code class="language-bash">wget https://advplyr.github.io/audiobookshelf-ppa/audiobookshelf_1.2.7_amd64.deb

sudo apt install ./audiobookshelf_1.2.7_amd64.deb</code>
      </pre>

    <!-- <div class="w-full h-24" /> -->
  </div>
</template>

<script>
export default {
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
