<template>
  <div id="book-tracks" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#book-tracks"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Audio Tracks
    </h1>

    <p class="text-sm md:text-base">An audiobook contains tracks. Tracks are audio files assigned a track number. <br />The track number is parsed from the audio filename and from the ID3 tags of the audio file.<br />Audiobooks that are made up of multiple discs or cd's will be ordered first by disc number then by track number.</p>

    <table class="my-4">
      <tbody>
        <tr class="bg-white bg-opacity-10 text-sm text-left font-semibold">
          <th>Key</th>
          <th>ID3 Tags <span class="text-gray-300 font-normal text-xs">&nbsp;(case-insensitive)</span></th>
          <th class="hidden md:block">Audio Filename</th>
        </tr>
        <tr>
          <td>TrackNumber</td>
          <td>track, trck, trk</td>
          <td class="hidden md:block">First number after removing title, publish year, series, author, disc number</td>
        </tr>
        <tr>
          <td>DiscNumber</td>
          <td>discnumber, disc, disk, tpos</td>
          <td class="hidden md:block">Number following "Disc" or "CD" (example: "Atlas Shrugged CD 01 - 1.mp3")</td>
        </tr>
      </tbody>
    </table>

    <p class="mb-2">The scanner will choose the more accurate track/disc number between the filename and ID3 tag numbers.</p>
    <p>Tracks can be manually ordered and enabled/disabled by pressing the "Manage Tracks" button on the audiobook page.</p>
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