<template>
  <div id="book-title-folder" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#book-title-folder"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Title Folder Naming
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