<template>
  <div id="book-audio-metadata" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#book-audio-metadata"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Audio File Metadata
    </h1>

    <p class="mb-4 text-sm md:text-base">Audiobookshelf uses the ID3 metadata tags in audio files to populate data.</p>

    <div class="flex -ml-8 mb-4">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-sm md:text-base">Data parsed from the folder structure and filenames takes priority over ID3 tags unless you have enabled the scanner setting "Prefer Audio Metadata".</p>
    </div>

    <p class="mb-4 text-sm md:text-base">Metadata on audio files will be mapped as follows (second tag after "/" is a fallback):</p>

    <table>
      <tbody>
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
      </tbody>
    </table>
    <p class="text-sm pt-2"><span class="text-sm text-warning">*</span> Genre meta tag can include multiple genres separated by "/", "//", or ";". e.g. "Science Fiction/Fiction/Fantasy"</p>

    <p class="my-4">Embedded cover art will be extracted and used only if there are no images in the book folder.</p>
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