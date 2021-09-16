<template>
  <div class="w-full h-full bg-gradient">
    <div class="absolute top-0 left-0 w-full h-screen overflow-hidden">
      <template v-for="(shelf, index) in shelves">
        <div :key="index" class="bookshelfRow w-full flex relative h-60 px-12">
          <template v-for="(book, n) in shelf">
            <div :key="`book-${n}`" class="h-60 pt-8 px-4">
              <div class="h-48 relative bg-primary" style="width: 120px">
                <div class="w-full h-full absolute top-0 left-0 opacity-25 bg-cover z-0" style="filter: blur(1px)" :style="{ backgroundImage: `url(/covers/${book})` }" />
                <img :src="`/covers/${book}`" class="absolute top-0 left-0 h-full w-full object-contain box-shadow-book z-10" />
              </div>
            </div>
          </template>
          <div class="bookshelfDivider h-4 w-full absolute bottom-0 left-0 right-0 z-10" />
        </div>
      </template>
      <div class="absolute top-0 left-0 w-full h-full overlay z-20" />
    </div>
    <div class="absolute top-0 left-0 w-full h-full z-30">
      <div class="h-full flex flex-col items-center justify-center">
        <img src="/Logo.png" class="h-40" />
        <h1 class="text-white text-5xl pt-8 font-book">AudioBookshelf</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shelves: [
        ['1984.jpg', 'anatomyofthestate.jpg', 'animalfarm.jpg', 'atlasshrugged.jpg', 'democracythegodthatfailed.jpg', 'themythoftherationalvoter.jpg', 'theroadtoserfdom.jpg', 'templeofthewinds.jpg', 'endersgame.jpg', 'theprince.jpg', 'thecountofmontecristo.jpg', 'economicsinonelesson.jpg'],
        ['bravenewworld.jpg', 'againstdemocracy.jpg', 'fahrenheit451.jpg', 'lordoftheflies.jpg', 'humanaction.jpg', 'theoryofsocialismandcapitalism.jpg', 'thehobbit.jpg', 'warandpeace.jpg', 'anthem.jpg'],
        ['theanarchisthandbook.jpg', 'faithofthefallen.jpg', 'theidiot.jpg', 'machineryoffreedom.png', 'thefountainhead.jpg'],
        ['notreason.jpg', 'ethicsofliberty.jpg'],
        []
      ]
    }
  },
  mounted() {
    var width = window.innerWidth
    var height = window.innerHeight

    var angle = Math.atan(height / width)
    var deg = angle * (180 / Math.PI) + 180
    document.documentElement.style.setProperty('--angle', '-' + deg + 'deg')
  }
}
</script>

<style>
.bookshelfRow {
  background-image: url(/wood_panels.jpg);
}
.bookshelfDivider {
  background: rgb(149, 119, 90);
  background: linear-gradient(180deg, rgba(149, 119, 90, 1) 0%, rgba(103, 70, 37, 1) 17%, rgba(103, 70, 37, 1) 88%, rgba(71, 48, 25, 1) 100%);
  box-shadow: 2px 14px 8px #111111aa;
}
.overlay {
  background: rgb(48, 48, 48);
  background: linear-gradient(var(--angle), rgba(48, 48, 48, 0) 0%, rgba(39, 39, 39, 0) 36%, rgba(46, 46, 46, 1) 50%, rgba(48, 48, 48, 1) 71%, rgba(34, 34, 34, 1) 86%, rgba(25, 25, 25, 1) 100%);
}
.box-shadow-book {
  box-shadow: 4px 1px 8px #11111166, -4px 1px 8px #11111166, 1px -4px 8px #11111166;
}
</style>