<template>
  <section class="text-center text-white container mx-auto relative">
    <h2 data-aos="fade-in">{{ label }}</h2>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="flex justify-center items-center container mx-auto md:h-full w-full relative my-32"
    >
      <img
        :src="require('@/assets/Layer 6.png')"
        alt="road-map-bg"
        class="absolute inset-x-0 h-full w-full invisible md:visible"
        data-aos-delay="100"
        data-aos="fade-in"
      />
      <img
        :src="require('@/assets/faq3.png')"
        alt="line"
        class="absolute top-10 inset-x-0 w-full visible md:invisible"
      />
      <div class="w-full absolute -top-12 md:-top-18 inset-x-auto">
        <img
          :src="item.image"
          :alt="`fly-percent-${i}`"
          class="w-44 mx-auto animate-bounce"
          data-aos-delay="100"
          data-aos="fade-in-up"
        />
      </div>
      <div class="h-auto relative">
        <div class="px-2 py-20">
          <h3 data-aos-delay="100" data-aos="fade-in">{{ item.label }}</h3>
          <p data-aos-delay="100" data-aos="fade-in" class="my-4">
            {{ item.description }}
          </p>
          <span
            data-aos-delay="100"
            data-aos="fade-in"
            class="underline uppercase cursor-pointer"
            @click="setMore(item)"
          >
            read more
          </span>
        </div>
      </div>
    </div>

    <div
      class="bg-gray-900 bg-opacity-50 fixed inset-0 flex justify-center items-center z-30"
      :class="!openModal ? 'hidden' : 'visible'"
    >
      <div class="modal md:w-1/2 md:h-1/2 m-auto rounded-xl">
        <div class="modal-header">
          <span class="mx-auto">{{ moreTitle }}</span>
          <close-icon
            :size="40"
            class="cursor-pointer"
            @click="openModal = false"
          />
        </div>
        <div class="modal-body">
          <div
            v-for="(more, m) in moreItems"
            :key="`more-${m}`"
            class="py-2 text-left"
          >
            {{ more }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CloseIcon from "vue-material-design-icons/Close.vue"

export default {
  name: "RoadMapComponent",
  components: { CloseIcon },
  props: {
    items: { type: Array, default: () => [] },
  },
  data: () => ({
    label: "road map",
    openModal: false,
    moreItems: [],
    moreTitle: "",
  }),
  methods: {
    setMore(item) {
      this.openModal = true
      this.moreItems = item.more
      this.moreTitle = item.label
    },
  },
}
</script>
