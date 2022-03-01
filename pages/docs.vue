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
      <p class="pl-2 text-base md:text-lg">
        Audiobookshelf works best when you have an organized directory structure like shown below. This is because information is taken from your folder names. This includes the author name, series name, book title, publish year, volume number, and subtitle. However, you can enable scanner settings to prefer using your audio file ID3 tags or an OPF file over using folder names.
      </p>
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="structure" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#structure"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Directory Structure
    </h1>

    <p class="mb-4 text-sm md:text-base">Here is an example supported directory structure</p>

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

    <h1 id="author-naming" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#author-naming"><span class="material-icons text-lg text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Author Folder Naming Convention
    </h1>

    <p class="mb-4">Supports "Last, First" author naming as well as multiple authors separated by "," or "&".<br /><br />Valid author folder names:</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Ichiro Kishimi</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Kishimi, Ichiro</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Ichiro Kishimi, Fumitake Koga</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Kishimi, Ichiro, Koga, Fumitake</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Ichiro Kishimi & Fumitake Koga</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Kishimi, Ichiro & Koga, Fumitake</p>
      </div>
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="naming" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#naming"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Title Folder Naming Convention
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
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">(1994) - Wizards First Rule - A Really Good Subtitle</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1 - Wizards First Rule</p>
      </div>
    </div>

    <ul class="list-outside md:list-inside px-6 md:px-0 list-disc my-4 text-sm md:text-base">
      <li class="py-1"><strong class="underline">Subtitle: </strong>Parsing out subtitles into a separate field is optional and must be enabled in settings. Subtitle must be separated by " - ".</li>
      <li class="py-1"><strong class="underline">Volume Number: </strong>The volume number can be the first number in the folder name separated by " - " (see last example) OR anywhere in the folder name if "Vol", "Book", or "Volume" is before the number. Case insensitive & decimals supported.</li>
      <li class="py-1"><strong class="underline">Publish Year: </strong>The publish year must be the first part of the name OR directly after a volume number, and separated by " - " on both sides.</li>
    </ul>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="metadata" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#metadata"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Audio File Metadata
    </h1>

    <p class="mb-4">Audiobookshelf uses the ID3 metadata tags in audio files to populate data.</p>

    <div class="flex -ml-8 mb-4">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base">Data parsed from the folder structure and filenames takes priority over ID3 tags unless you have enabled the scanner setting "Prefer Audio Metadata".</p>
    </div>

    <p class="mb-4">Metadata on audio files will be mapped as follows (second tag after "/" is a fallback):</p>

    <table>
      <tr class="bg-white bg-opacity-10 text-sm text-left font-semibold">
        <th>ID3 Tag <span class="text-gray-300 font-normal text-xs">&nbsp;(case-insensitive)</span></th>
        <th>Audiobookshelf Data</th>
      </tr>
      <tr>
        <td>artist / album-artist</td>
        <td>Author</td>
      </tr>
      <tr>
        <td>album / title</td>
        <td>Title</td>
      </tr>
      <tr>
        <td>subtitle</td>
        <td>Subtitle</td>
      </tr>
      <tr>
        <td>publisher</td>
        <td>Publisher</td>
      </tr>
      <tr>
        <td>year</td>
        <td>Publish Year</td>
      </tr>
      <tr>
        <td>composer</td>
        <td>Narrator</td>
      </tr>
      <tr>
        <td>description</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>genre</td>
        <td>Genres <span class="text-sm text-warning">*</span></td>
      </tr>
      <tr>
        <td>series</td>
        <td>Series</td>
      </tr>
      <tr>
        <td>series-part</td>
        <td>Volume Number</td>
      </tr>
      <tr>
        <td>language / lang</td>
        <td>Language</td>
      </tr>
      <tr>
        <td>isbn</td>
        <td>ISBN</td>
      </tr>
      <tr>
        <td>asin</td>
        <td>ASIN</td>
      </tr>
    </table>
    <p class="text-sm pt-2"><span class="text-sm text-warning">*</span> Genre meta tag can include multiple genres separated by "/", "//", or ";". e.g. "Science Fiction/Fiction/Fantasy"</p>

    <p class="my-4">Embedded cover art will be extracted and used only if there are no images in the book folder.</p>
    <p class="my-4">If you have a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">desc.txt</span> in the audiobook folder it will be used as the description.</p>
    <p class="my-4">If you have a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">reader.txt</span> in the audiobook folder it will be used as the narrator.</p>
    <p class="mt-4">If you have an <a href="https://docs.fileformat.com/ebook/opf/" target="_blank" class="text-blue-500 hover:text-blue-300 underline">OPF file</a> with extension <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">.opf</span> in the audiobook folder it will be parsed.<br />Details extracted from OPF:</p>
    <div v-for="(key, index) in opfKeys" :key="key" class="inline-block">
      <span class="bg-white bg-opacity-10 text-gray-100 rounded-md px-1 py-0.5 font-mono">{{ key }}</span
      >{{ index < opfKeys.length - 1 ? ', ' : '' }}
    </div>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="tracks" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#tracks"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Audio Tracks
    </h1>

    An audiobook contains tracks. Tracks are audio files assigned a track number. <br />The track number is parsed from the audio filename and from the ID3 tags of the audio file.<br />Audiobooks that are made up of multiple discs or cd's will be ordered first by disc number then by track number.

    <table class="my-4">
      <tr class="bg-white bg-opacity-10 text-sm text-left font-semibold">
        <th>Key</th>
        <th>ID3 Tags <span class="text-gray-300 font-normal text-xs">&nbsp;(case-insensitive)</span></th>
        <th>Audio Filename</th>
      </tr>
      <tr>
        <td>TrackNumber</td>
        <td>track, trck, trk</td>
        <td>First number after removing title, publish year, series, author, disc number</td>
      </tr>
      <tr>
        <td>DiscNumber</td>
        <td>discnumber, disc, disk, tpos</td>
        <td>Number following "Disc" or "CD" (example: "Atlas Shrugged CD 01 - 1.mp3")</td>
      </tr>
    </table>

    <p class="mb-2">The scanner will choose the more accurate track/disc number between the filename and ID3 tag numbers.</p>
    <p>Tracks can be manually ordered and enabled/disabled by pressing the "Manage Tracks" button on the audiobook page.</p>

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />

    <h1 id="abmetadata" class="text-3xl mb-4 -ml-8">
      <nuxt-link to="#abmetadata"><span class="material-icons text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >abmetadata file
    </h1>

    <div class="flex -ml-8 mb-8">
      <div>
        <span class="material-icons text-success text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-base md:text-lg">This is the start of setting up a better standard around persisting audiobook metadata and is likely to change, so if you have suggestions around audiobook metadata please join the discord or start a github discussion. The abmetadata file format is based on ffmetadata.</p>
      <!-- <p class="pl-2 text-base md:text-lg">
        Help needed writing documentation! This website is on <a href="https://github.com/advplyr/audiobookshelf-web" target="_blank" class="text-blue-500 underline">github</a>. Join the <a href="https://github.com/advplyr/audiobookshelf/discussions" target="_blank" class="text-blue-500 underline">discussion</a>,
        <a href="https://github.com/advplyr/audiobookshelf/issues" target="_blank" class="text-blue-500 underline">report an issue</a> or contact me directly at <a href="mailto:advplyr@protonmail.com" class="text-blue-500 underline">advplyr@protonmail.com</a>.
      </p> -->
    </div>

    <p class="mb-4 text-sm md:text-base">
      As of v1.7.1 audiobookshelf creates a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">metadata.abs</span> for each book. By default, the file will be saved in <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">/metadata/books/</span> folders, but can be stored in the same folder as your book by enabling the server setting.
    </p>

    <p class="mb-4 text-sm md:text-base">If you choose to store this file in your book folder, or if you move it to your book folder, it will serve as the source of truth for your book details and overwrite them. If you have enabled the server settings to prefer OPF or prefer audio ID3 metadata, then those will take precedence during scans.</p>

    <p class="mb-4 text-sm md:text-base">Here is a demo of <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">metadata.abs</span> getting updated after saving details from the web app, then showing the metadata file get updated manually within the book folder and those changes getting pulled in after pressing "Re-Scan".</p>

    <img src="https://cdn.discordapp.com/attachments/942931733978943508/947672769481564180/abmetadataDemo.gif" />

    <div class="w-full bg-white bg-opacity-20 h-px my-8" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      opfKeys: ['title', 'author', 'narrator', 'publishYear', 'publisher', 'isbn', 'description', 'genres', 'language', 'series', 'volumeNumber']
    }
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