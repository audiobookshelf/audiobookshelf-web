<template>
  <div id="book-audio-metadata" class="not-prose">
    <p class="mb-4 text-sm md:text-base">Audiobookshelf uses the ID3 metadata tags in audio files to populate data.</p>

    <div class="flex -ml-8 mb-4">
      <div>
        <span class="material-icons text-warning text-2xl">priority_high</span>
      </div>
      <p class="pl-2 text-sm md:text-base">Ensure your settings for the <a href="/guides/book-scanner#book-metadata-parsing">metadata priority settings</a> matches your file structure.</p>
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
          <td>series / mvnm</td>
          <td>Series</td>
        </tr>
        <tr>
          <td>series-part / mvin</td>
          <td>Series Sequence</td>
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
          <td>asin / audible_asin</td>
          <td>ASIN</td>
        </tr>
        <tr>
          <td>Overdrive MediaMarkers</td>
          <td>Chapters<span class="text-sm text-warning">**</span></td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-2"><span class="text-sm text-warning">*</span> Genre meta tag can include multiple genres separated by "/", "//", or ";". e.g. "Science Fiction/Fiction/Fantasy"</p>
    <p class="text-sm pt-2"><span class="text-sm text-warning">**</span> Chapter extraction from Overdrive MediaMarkers must be enabled in your server settings</p>

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

<style scoped>
p {
  margin: 0px;
}
img {
  margin: 0px;
}
</style>
