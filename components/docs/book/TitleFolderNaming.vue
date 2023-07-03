<template>
  <div id="book-title-folder" class="not-prose">
    <p class="mb-4">In addition to the book title, the title folder can include the publish year, series sequence, the subtitle, and the narrator.</p>
    <p class="mb-4">Here are a bunch of ways the same book could be named:</p>

    <div class="p-4 border border-opacity-10 bg-primary bg-opacity-20 font-mono">
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Wizards First Rule</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">Wizards First Rule {Sam Tsoutsouvas}</p>
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
        <p class="pl-2">1994 - Volume 1. Wizards First Rule {Sam Tsoutsouvas}</p>
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
        <p class="pl-2">Vol. 1 - 1994 - Wizards First Rule - A Really Good Subtitle {Sam Tsoutsouvas}</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">(1994) - Wizards First Rule - A Really Good Subtitle</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1 - Wizards First Rule</p>
      </div>
      <div class="flex py-1">
        <img src="/folder.svg" class="h-6" />
        <p class="pl-2">1. Wizards First Rule</p>
      </div>
    </div>

    <ul class="list-outside md:list-inside px-6 md:px-0 list-disc my-4 text-sm md:text-base">
      <li class="py-1">
        <strong><u>Subtitle</u>:</strong> Parsing out subtitles into a separate field is optional and must be enabled in settings. Subtitle must be separated by " - ".
      </li>
      <li class="py-1">
        <strong><u>Series Sequence</u>:</strong> Case insensitive & decimals supported.
      </li>
      <ul>
        <li style="padding-left: 3em">The sequence can be placed anywhere in the folder name.</li>
        <li style="padding-left: 3em">It must be followed by " - " or ". "</li>
        <li style="padding-left: 3em">If it is not at the beginning of the folder name, it must be preceded by " - " and "Vol" "Vol." "Volume" or "Book"</li>
      </ul>
      <li class="py-1">
        <strong><u>Publish Year</u>:</strong> The publish year must be the first part of the name OR directly after a series sequence, and separated by " - " on both sides.
      </li>
      <li class="py-1">
        <strong><u>Narrator</u>:</strong> Must be wrapped in curly braces. e.g. {Sam Tsoutsouvas}.
      </li>
      <li class="py-1">
        <strong><u>Discs and Disc Numbers</u>:</strong> You have to name each folder in the format of CD1, CD01, or CD001; Disk Folder support is not fully supported yet.
      </li>
    </ul>
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