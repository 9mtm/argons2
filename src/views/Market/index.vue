<template>
  <h1 class="text-center">{{ imagesToRender.length }} / {{ MAX }}</h1>

  <div class="container mx-auto my-16 grid grid-flow-col">
    <div class="col-span-12 md:col-span-3">
      <div v-for="(attr, a) in attrs" :key="a" class="text-gray-700">
        <label class="block mb-1" :for="`forms-labelForSelect-${a}`">
          {{ attr.key }}
        </label>
        <select
          v-model.trim="filters[attr.key]"
          :id="`forms-labelForSelect-${a}`"
          class="w-full text-base border rounded-lg appearance-none capitalize"
        >
          <option value="all" :selected="true">--- all ---</option>
          <option v-for="val in attr.values" :key="a + val" :value="val">
            {{ val }}
          </option>
        </select>
      </div>
    </div>
    <div class="col-span-12 md:col-span-9">
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mx-auto mb-10"
      >
        <router-link
          v-for="image in imagesToRender"
          :key="`image-${image.index}`"
          class="bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 transition-colors rounded-xl cursor-pointer"
          :to="`/market/${image.index}`"
        >
          <img
            :src="image.src"
            :alt="`image-${image.index}`"
            class="rounded-xl"
          />
          <div class="grid grid-flow-col items-center my-5 break-all px-4">
            <div class="col-span-1">{{ image.name }}</div>
            <div class="col-span-2">
              <div class="grid grid-cols-1">
                <div class="flex items-center justify-end">
                  <eth-icon :size="20" class="inline-block" />
                  <span class="font-bold">{{ image.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { uniq } from "lodash"
import EthIcon from "vue-material-design-icons/Ethereum.vue"

export default {
  name: "MarketView",
  components: { EthIcon },
  data: () => ({
    data: [],
    images: [],
    attrs: [],
    filters: {},
    MAX: 2,
  }),
  created() {
    // fill data and images objects
    for (let i = 1; i <= this.MAX; i++) {
      this.data.push(this.getJsonByIndex(i))
      this.images.push({
        index: i,
        src: this.getImageByIndex(i),
        attrs: {},
      })
    }

    // fill attributes with default keys
    this.data[0].attributes.forEach((attr) => {
      this.attrs.push({
        key: attr.trait_type,
        values: [],
      })

      // fill filters
      this.filters[String(attr.trait_type).toLowerCase()] = "all"
    })

    // fill attrs values with the same key
    for (let i = 0; i < this.attrs.length; i++) {
      this.data.forEach((d) => {
        this.attrs[i].values.push(d.attributes[i].value)
      })
    }

    // push image attrs
    this.data.forEach((d, i) => {
      for (const attr of d.attributes) {
        this.images[i].attrs[this.forceLowerAndTrim(attr.trait_type)] =
          attr.value
        // name
        this.images[i].name = d.name
        // price
        // this.images[i].price = Math.floor(Math.random() * 100)
        this.images[i].price = "***"
      }
    })

    // make attrs values uniq
    this.attrs.map((attr) => {
      attr.values = uniq(attr.values)
      return attr
    })
  },
  computed: {
    imagesToRender() {
      let list = this.images
      if (!Object.values(this.filters).every((f) => f === "all")) {
        const obj = this.filters

        Object.keys(obj).forEach((key) => {
          list = list.filter((img) => {
            if (obj[key] === "all") {
              return true
            } else {
              return this.isSimilar(img, key, obj[key])
            }
          })
        })
      }
      return list
    },
  },
  methods: {
    getJsonByIndex(index) {
      return require(`../../data/json/${index}.json`)
    },
    getImageByIndex(index) {
      return require(`../../data/images/${index}.png`)
    },
    isSimilar(img, prop, val) {
      return (
        this.forceLowerAndTrim(img.attrs[this.forceLowerAndTrim(prop)]) ===
        this.forceLowerAndTrim(val)
      )
    },
    forceLowerAndTrim(val) {
      return String(val).toLocaleLowerCase().trim()
    },
  },
}
</script>
