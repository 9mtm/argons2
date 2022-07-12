<template>
  <section class="container mx-auto text-white pt-0">
    <p class="text-center mb-4" data-aos="fade-in-up">
      The collection contains 4 main powers based on the 4 elements red is fire,
      green is nature, blue is water and air is purple
    </p>
    <div
      class="grid grid-cols-2 lg:grid-cols-4 gap-16 justify-center text-center"
    >
      <div
        v-for="({ image, label, color }, i) in items"
        :key="i"
        data-aos="zoom-in-up"
        :data-aos-delay="i * 100"
      >
        <img
          :src="image"
          :alt="`power-${i}`"
          class="my-2 w-3/5 mx-auto"
          data-aos="flip-right"
        />
        <h5 class="mt-4" :style="`color:${color}`">{{ label }}</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "powerComponent",
  props: {
    items: { type: Array, default: () => [] },
  },
}
</script>
