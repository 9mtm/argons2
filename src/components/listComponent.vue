<template>
  <section class="container mx-auto">
    <ul class="w-full grid grid-cols-1 md:grid-cols-2 text-white">
      <li v-for="(item, i) in list" :key="i" class="flex py-3">
        <RingComponent :text="i + 1" />
        <span class="flex justify-center items-center relative ml-2">
          {{ item }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import RingComponent from "./ringComponent.vue"
export default {
  name: "ListComponent",
  props: {
    list: { type: Array, default: () => [] },
  },
  components: { RingComponent },
}
</script>
