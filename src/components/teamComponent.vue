<template>
  <section class="container mx-auto">
    <h2>{{ label }}</h2>
    <agile
      :autoplay="true"
      :autoplaySpeed="3500"
      :speed="500"
      :dots="false"
      :options="options"
      :centerMode="true"
      class="relative"
    >
      <template #default>
        <div
          v-for="(item, s) in team"
          :key="s"
          class="px-2 relative overflow-hidden"
        >
          <img :src="item.avatar" alt="team" />
          <div
            class="absolute inset-0 mx-2 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-500"
          >
            <div
              class="inset-x-0 bottom-0 absolute bg-gray-900 text-white text-center py-4"
            >
              <h4 class="font-bold">{{ item.name }}</h4>
              <h5>{{ item.position }}</h5>
            </div>
          </div>
        </div>
      </template>
    </agile>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile"

export default {
  name: "teamComponent",
  props: {
    team: { type: Array, default: () => [] },
  },
  components: {
    agile: VueAgile,
  },
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
              slidesToShow: 4,
            },
          },
        ],
      }
    },
  },
  data: () => ({
    label: "Argon Team",
  }),
}
</script>
