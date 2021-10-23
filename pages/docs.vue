<template>
  <div class="w-full max-w-5xl mx-auto px-2 py-8">
    <div class="flex -ml-8 mb-8">
      <div>
        <span class="material-icons text-success text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">
        Help needed writing documentation! This website is on <a href="https://github.com/advplyr/audiobookshelf-web" target="_blank" class="text-blue-500 underline">github</a>. Join the <a href="https://github.com/advplyr/audiobookshelf/discussions" target="_blank" class="text-blue-500 underline">discussion</a>,
        <a href="https://github.com/advplyr/audiobookshelf/issues" target="_blank" class="text-blue-500 underline">report an issue</a> or contact me directly at <a href="mailto:advplyr@protonmail.com" class="text-blue-500 underline">advplyr@protonmail.com</a>.
      </p>
    </div>

    <div class="flex -ml-8">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">AudioBookshelf relies on you already having an organized directory structure. This is because information is taken from your folder names. This includes the author name, series name, book title, publish year, volume number, and subtitle.</p>
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="structure" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#structure"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Directory Structure
    </h1>

    <p class="mb-4 text-sm md:text-base">Here is an example supported directory structure (Note: Author names can also be Last, First)</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Terry Goodkind</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Author</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Sword of Truth</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Series</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Vol 1 - 1994 - Wizards First Rule</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio Track 1.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio Track 2.mp3</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">crop_original</span>
        <p class="pl-2">Cover.jpg</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Vol 2 - 1995 - Stone of Tears</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audiobook.m4b</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Heart of Black Ice - Sister of Darkness</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio File.m4a</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Steven Levy</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Author</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Hackers - Heroes of the Computer Revolution</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audio File.m4a</p>
      </div>
      <div class="flex py-1 max-w-2xl">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1945 - Animal Farm</p>
        <div class="hidden md:block flex-grow" />
        <span class="hidden md:block text-white text-opacity-50 pl-4">&lt;-- Title&nbsp;</span>
      </div>
      <div class="flex py-1 max-w-2xl">
        <span class="text-white text-opacity-25">&nbsp;-&nbsp;</span>
        <span class="material-icons">audiotrack</span>
        <p class="pl-2">Audiobook.mp3</p>
      </div>
    </div>

    <p class="my-4 text-sm md:text-base">Files must always be in a directory with the book title. <span class="text-error">Files in the root directory are ignored.</span><br />The title directory can be in the root directory, an author directory, or a series directory.</p>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="naming" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#naming"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Naming Convention
    </h1>

    <p class="mb-4">In addition to the book title, the title folder can include the publish year, volume number, and the subtitle.</p>
    <p class="mb-4">Here are a bunch of ways the same book could be named:</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Wizards First Rule</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1994 - Wizards First Rule</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Wizards First Rule - A Really Good Subtitle</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1994 - Book 1 - Wizards First Rule</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Vol 1 - 1994 - Wizards First Rule</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1994 - Wizards First Rule - Volume 1</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Vol. 1 - 1994 - Wizards First Rule - A Really Good Subtitle</p>
      </div>
    </div>

    <ul class="list-outside md:list-inside px-6 md:px-0 list-disc my-4 text-sm md:text-base">
      <li class="py-1">Parsing out subtitles into a separate field is optional and must be enabled in settings.</li>
      <li class="py-1">Different parts of a name should be separated by " - ", with the exception of the volume number (spaces aren't needed).</li>
      <li class="py-1">The publish year must be the first part of the name OR directly after a volume number, and separated by " - " on both sides.</li>
    </ul>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="metadata" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#metadata"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Audio File Metadata
    </h1>

    <p class="mb-4">AudioBookshelf uses the ID3 metadata tags in audio files to populate data.</p>

    <div class="flex -ml-8 mb-4">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base">Metadata is only mapped to audiobookshelf if the field is empty. Data parsed from the folder structure and filenames takes priority over ID3 tags.</p>
    </div>

    <p class="mb-4">Metadata on audio files will be mapped as follows:</p>

    <table>
      <tr class="bg-white bg-opacity-10 text-sm text-left font-semibold">
        <th>File Metadata</th>
        <th>AudioBookshelf Data</th>
      </tr>
      <tr>
        <td>Artist</td>
        <td>Author</td>
      </tr>
      <tr>
        <td>Subtitle</td>
        <td>Subtitle</td>
      </tr>
      <tr>
        <td>Publisher</td>
        <td>Publisher</td>
      </tr>
      <tr>
        <td>Year</td>
        <td>Publish Year</td>
      </tr>
      <tr>
        <td>Composer</td>
        <td>Narrator</td>
      </tr>
      <tr>
        <td>Description</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>Genre</td>
        <td>Genres <span class="text-sm text-warning">*</span></td>
      </tr>
      <tr>
        <td>Series</td>
        <td>Series</td>
      </tr>
      <tr>
        <td>Series-Part</td>
        <td>Volume Number</td>
      </tr>
    </table>
    <p class="text-sm pt-2"><span class="text-sm text-warning">*</span> Genre meta tag can include multiple genres separated by "/", "//", or ";". e.g. "Science Fiction/Fiction/Fantasy"</p>

    <p class="my-4">Embedded cover art will be extracted and used.</p>
    <p class="my-4">If you have a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">desc.txt</span> in the audiobook folder it will be used as the description.</p>
    <p class="my-4">If you have a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">reader.txt</span> in the audiobook folder it will be used as the narrator.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>

<style>
table,
tr,
td,
th {
  border: 1px solid #666;
}
table td,
th {
  padding: 5px 15px;
}
</style>