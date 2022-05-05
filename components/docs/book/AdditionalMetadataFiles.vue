<template>
  <div id="book-additional-metadata" class="py-10 md:py-20">
    <h1 class="text-xl md:text-3xl mb-4 md:-ml-8">
      <nuxt-link to="#book-additional-metadata"><span class="material-icons text-lg md:text-xl text-gray-400 hover:text-white cursor-pointer mr-2">tag</span></nuxt-link
      >Additional Metadata Files
    </h1>

    <p class="my-4">If you have a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">desc.txt</span> in the library item folder it will be used as the description.</p>
    <p class="my-4">If you have a file named <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">reader.txt</span> in the library item folder it will be used as the narrator.</p>
    <p class="mt-4">If you have an <a href="https://docs.fileformat.com/ebook/opf/" target="_blank" class="text-blue-500 hover:text-blue-300 underline">OPF file</a> with extension <span class="bg-white bg-opacity-10 text-gray-100 rounded-md p-1 font-mono">.opf</span> in the library item folder it will be parsed.<br />Details extracted from OPF:</p>
    <div v-for="(key, index) in opfKeys" :key="key" class="inline-block">
      <span class="bg-white bg-opacity-10 text-gray-100 rounded-md px-1 py-0.5 font-mono">{{ key }}</span
      ><span v-if="index < opfKeys.length - 1">,&nbsp;</span>
    </div>
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