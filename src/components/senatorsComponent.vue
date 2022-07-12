<template>
  <section class="container mx-auto" :class="{ 'pb-0': !singleSlide }">
    <div class="text-center text-white">
      <h2 class="mb-4 flex justify-between items-center">
        <img
          v-if="singleSlide"
          :src="require('@/assets/Final Aragon.png')"
          alt="right"
          class="w-16 animate-bounce"
          data-aos="fade-in"
        />
        <div class="mx-auto" data-aos="zoom-in-down">{{ label }}</div>
        <img
          v-if="singleSlide"
          :src="require('@/assets/Girl [Recovered].png')"
          alt="right"
          class="w-18 animate-bounce"
          data-aos="fade-in"
        />
      </h2>
      <p data-aos="zoom-in-up" :data-aos-delay="100">{{ caption }}</p>
      <div class="container mx-auto my-16">
        <agile
          :autoplay="true"
          :autoplaySpeed="3500"
          :speed="500"
          :dots="false"
          :options="options"
          :centerMode="true"
          class="relative"
          :class="singleSlide ? 'mx-64' : 'mx-0'"
          @after-change="showCurrentSlide($event)"
        >
          <template #default>
            <div v-for="(item, s) in items" :key="s" class="px-1">
              <img
                :src="item.src"
                alt="senator"
                class="w-full transform"
                @click="viewImage(item.src)"
              />
            </div>
          </template>

          <template #prevButton>
            <ArrowComponent
              direction="left"
              class="absolute -left-12 md:-left-10"
              style="top: 44%"
              :big="singleSlide"
            />
          </template>
          <template #nextButton>
            <ArrowComponent
              direction="right"
              class="absolute -right-12 md:-right-10"
              style="top: 44%"
              :big="singleSlide"
            />
          </template>
        </agile>
      </div>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile"
import ArrowComponent from "./arrowComponent.vue"

export default {
  name: "SenatorsComponent",
  props: {
    items: { type: Array, default: () => [] },
    label: { type: String, default: "" },
    caption: { type: String, default: "" },
    centerScaled: { type: Boolean, default: false },
    slidesToShow: { type: Number, default: 3 },
  },
  components: {
    agile: VueAgile,
    ArrowComponent,
  },
  data: () => ({
    currentSlide: 0,
    modal: false,
    modalImageSrc: "",
  }),
  computed: {
    options() {
      return {
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: this.slidesToShow,
            },
          },
        ],
      }
    },
    singleSlide() {
      return this.slidesToShow === 1
    },
  },
  methods: {
    showCurrentSlide({ currentSlide }) {
      this.currentSlide = currentSlide
    },
  },
}
</script>
