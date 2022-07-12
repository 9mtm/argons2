<template>
  <div class="container mx-auto mt-28">
    <div class="card">
      <div class="grid grid-cols-5">
        <div class="col-span-4 md:col-span-2">
          <img :src="item.image" alt="item image" class="w-full object-cover" />
        </div>
        <div class="col-span-4 md:col-span-2 p-4">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-start">
              <calendar-icon :size="20" class="inline-block mx-2" />
              <span class="font-thin">upload at</span>
            </div>
            <div class="flex items-center justify-start">
              <calendar-icon :size="20" class="inline-block mx-2" />
              <span class="font-thin">upload at</span>
            </div>
            <div class="flex items-center justify-start">
              <calendar-icon :size="20" class="inline-block mx-2" />
              <span class="font-thin">upload at</span>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 class="mb-2 font-bold">{{ item.name }}</h3>
            </div>
            <div class="flex justify-end">
              <div class="text-center">
                <h2 class="font-bold">123</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4 md:col-span-1 text-center">
          <div class="my-1">
            <fav-icon :size="40" class="inline-block mx-2" />
          </div>
          <div class="my-1">
            <share-icon :size="40" class="inline-block mx-2" />
          </div>
          <div class="my-1">
            <like-icon :size="40" class="inline-block mx-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from "vue-material-design-icons/Calendar.vue"
import ShareIcon from "vue-material-design-icons/Share.vue"
import LikeIcon from "vue-material-design-icons/ThumbUp.vue"
import FavIcon from "vue-material-design-icons/Bookmark.vue"

export default {
  components: { CalendarIcon, ShareIcon, LikeIcon, FavIcon },
  data: () => ({
    item: {
      image: "",
      name: "",
      description: "",
    },
  }),
  computed: {
    id() {
      return this.$route.params.id || null
    },
  },
  created() {
    this.item.image = this.getImageByIndex(this.id)
    const file = this.getJsonByIndex(this.id)
    this.item.name = file.name
    this.item.description = file.description
  },
  methods: {
    getJsonByIndex(index) {
      return require(`../../data/json/${index}.json`)
    },
    getImageByIndex(index) {
      return require(`../../data/images/${index}.png`)
    },
  },
}
</script>
