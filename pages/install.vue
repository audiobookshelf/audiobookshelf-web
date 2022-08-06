<template>
  <div class="w-full max-w-5xl mx-auto px-2 py-8">
    <h1 id="docker" class="text-3xl mb-2 -ml-8">
      <nuxt-link to="#docker"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker Install
    </h1>

    <p class="mb-2 text-sm md:text-base">Multi-architecture image for amd64, arm64 and arm/v7. Also available in Unraid Community Apps.</p>

    <p class="text-error">Note: Before coping and pasting the below command from a teminal window type <code class="language-bash"> id </code> This will output your UID (User ID) and your GID (Group ID for Docker)</p>
    

    <pre>
        <code class="language-bash">docker pull ghcr.io/advplyr/audiobookshelf

docker run -d \
    -e AUDIOBOOKSHELF_UID=99 \
    -e AUDIOBOOKSHELF_GID=100 \
    -p 13378:80 \
    -v &lt;/path/to/config>:/config \
    -v &lt;/path/to/metadata>:/metadata \
    -v &lt;/path/to/audiobooks>:/audiobooks \
    -v &lt;/path/to/podcasts>:/podcasts \
    --name audiobookshelf \
    --rm ghcr.io/advplyr/audiobookshelf</code>
    </pre>

    <p class="text-error">Note: Volume mappings should all be separate directories that are not contained in eachother.</p>
    <!-- <p class="text-warning py-1">Unraid users: it is recommended that you map <span class="font-mono">/config</span> and <span class="font-mono">/metadata</span> to <span class="font-mono">/mnt/user/appdata/audiobookshelf/config</span> and <span class="font-mono">/mnt/user/appdata/audiobookshelf/metadata</span> respectively.</p> -->

    <p class="mt-2 mb-1 font-semibold text-lg">Volume mappings</p>
    <p>• &nbsp;<span class="font-mono">/config</span> will contain the database (users/books/libraries/settings)</p>
    <p>• &nbsp;<span class="font-mono">/metadata</span> will contain cache, streams, covers, downloads, backups and logs</p>
    <p>• &nbsp;Map any other directories you want to use for your book and podcast collections (ebooks supported as experimental)</p>

    <div class="w-full h-px bg-gray-400 my-6" />

    <br />

        <h1 id="docker" class="text-3xl mb-2 -ml-8">
      <nuxt-link to="#docker"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker-compose Setup
    </h1>

    <p class="mb-2 text-sm md:text-base">Multi-architecture image for amd64, arm64 and arm/v7. Also available in Unraid Community Apps.</p>

    <p class="text-error">Note: Before coping and pasting the below information into a Docker-compose file. You need to run the following command from a teminal window type <code class="language-bash">id</code> This will output your UID (User ID) and your GID (Group ID for Docker)</p>
    

<pre>
            <code class="language-bash">version: "3.7"
services:
  audiobookshelf:
    image: ghcr.io/advplyr/audiobookshelf:latest
    environment:
      - AUDIOBOOKSHELF_UID=99
      - AUDIOBOOKSHELF_GID=100
    ports:
      - 13378:80
    volumes:
      - &lt;/path/to/config>:/audiobooks
      - &lt;/path/to/config>:/podcasts
      - &lt;/path/to/config>:/config
      - &lt;/path/to/config>:/metadata
            
            </code>
        </pre>

        <p class="text-error">Note: Remember to change the path to your acutal directory and remove the &#60;&#62; symbols </p>
        <p class="text-error">Note: Volume mappings should all be separate directories that are not contained in eachother.</p>
        <!-- <p class="text-warning py-1">Unraid users: it is recommended that you map <span class="font-mono">/config</span> and <span class="font-mono">/metadata</span> to <span class="font-mono">/mnt/user/appdata/audiobookshelf/config</span> and <span class="font-mono">/mnt/user/appdata/audiobookshelf/metadata</span> respectively.</p> -->

        <p class="mt-2 mb-1 font-semibold text-lg">Volume mappings</p>
        <p>• &nbsp;<span class="font-mono">/config</span> will contain the database (users/books/libraries/settings)</p>
        <p>• &nbsp;<span class="font-mono">/metadata</span> will contain cache, streams, covers, downloads, backups and logs</p>
        <p>• &nbsp;Map any other directories you want to use for your book and podcast collections (ebooks supported as experimental)</p>
    <div class="w-full h-px bg-gray-400 my-6" />

    <br />

    <h1 id="linux" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#linux"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Linux Install
    </h1>

    <span class="text-error">Note: Only for amd64 architecture</span>
    <p class="mb-2 mt-1 text-sm md:text-base">Will use config file <span class="bg-white bg-opacity-10 text-gray-100 rounded-md px-1 py-0.5 font-mono">/etc/default/audiobookshelf</span> if exists or create the following default config:</p>

    <pre>
      <code class="language-bash">  METADATA_PATH="/usr/share/audiobookshelf/metadata"
  CONFIG_PATH="/usr/share/audiobookshelf/config"
  FFMPEG_PATH="/usr/lib/audiobookshelf-ffmpeg/ffmpeg"
  FFPROBE_PATH="/usr/lib/audiobookshelf-ffmpeg/ffprobe"
  PORT=7331</code>
    </pre>

    <br />

    <h2 id="ubuntu" class="text-2xl mb-2 -ml-6">
      <nuxt-link to="#ubuntu"><span class="material-icons text-lg text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Ubuntu Install (PPA)
    </h2>

    <div class="flex -ml-8 mt-6 mb-4">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">
        If you get invalid certificate issues with the PPA then update the file <span class="bg-white bg-opacity-10 text-gray-100 rounded-md px-1 py-0.5 font-mono">/etc/apt/sources.list.d/audiobookshelf.list</span> to <span class="bg-white bg-opacity-10 text-gray-100 rounded-md px-1 py-0.5 font-mono">deb [trusted=yes] https://advplyr.github.io/audiobookshelf-ppa ./</span>
      </p>
    </div>

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

    <h2 id="debian" class="text-2xl mb-2 mt-6 -ml-6">
      <nuxt-link to="#debian"><span class="material-icons text-lg text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >All other Linux Distros
    </h2>

    <p class="mb-4 text-sm md:text-base">Grab the latest debian package from the <a href="https://github.com/advplyr/audiobookshelf-ppa" target="_blank" class="underline text-blue-400 hover:text-blue-200">audiobookshelf-ppa</a> github repository, and install.</p>

    <pre>
        <code class="language-bash">wget https://advplyr.github.io/audiobookshelf-ppa/audiobookshelf_2.1.2_amd64.deb

sudo apt install ./audiobookshelf_2.1.2_amd64.deb</code>
      </pre>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="updating" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="updating"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Updating Instructions
    </h1>

    <h1 id="docker-update" class="text-3xl mb-2 -ml-8">
      <nuxt-link to="#docker-update"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker Update
    </h1>

    <p>To update docker please run the following commands.</p>

    <pre>
    <code class="language-bash">docker stop audiobookshelf
docker rm audiobookshelf
docker image prune -a
docker pull ghcr.io/advplyr/audiobookshelf:latest
docker start audiobookshelf
    </code>
    </pre>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="docker-compose-update" class="text-3xl mb-2 -ml-8">
      <nuxt-link to="#docker-compose-update"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Docker-Compose Update
    </h1>

    <p>To update Docker-compose please run one of the following commands.</p>
    <p class="text-error">Note: To check which version of Docker Compose you are running run the following:<code class="language-bash">docker-compose --version</code> or <code class="language-bash">docker compose version</code></p>
    
<p> Docker Compose V1
  <pre>
    <code class="language-bash">docker-compose --file &lt;/path/to/config>/docker-compose.yml pull
docker-compose --file &lt;/path/to/config>/docker-compose.yml up -d
    </code>
    </pre>

</p>
<p> Docker Compose V2
  <pre>
    <code class="language-bash">docker compose --file &lt;/path/to/config>/docker-compose.yml pull
docker compose --file &lt;/path/to/config>/docker-compose.yml up -d
    </code>
    </pre>

</p>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="reverse-proxy" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#reverse-proxy"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Reverse Proxy Setup
    </h1>
    <a href="https://github.com/advplyr/audiobookshelf#reverse-proxy-set-up" class="text-blue-500 hover:text-blue-300 underline">See Github Readme</a>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="mobile" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#mobile"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link>
      Mobile Apps <span class="italic text-xl">(beta)</span>
    </h1>

    <p class="mb-4">The mobile apps are open source on <a href="https://github.com/advplyr/audiobookshelf-app" class="text-blue-500 hover:text-blue-300 underline" target="_blank">Github</a>. Report bugs and suggest features there.</p>

    <h2 class="text-lg font-semibold">Android</h2>
    <a href="https://play.google.com/store/apps/details?id=com.audiobookshelf.app" class="text-blue-500 hover:text-blue-300 underline" target="_blank">Install from the Google Play Store.</a>

    <h2 class="text-lg font-semibold mt-4">iOS</h2>
    <a href="https://testflight.apple.com/join/wiic7QIW" class="text-blue-500 hover:text-blue-300 underline" target="_blank">Join Test Flight beta testing and install the app.</a>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />
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
