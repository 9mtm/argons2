<template>
  <section class="text-white container mx-auto">
    <h2 data-aos="fade-in" class="text-center">{{ label }}</h2>
    <div class="my-16">
      <div v-for="item in itemsToRender" :key="item.id" class="my-10 relative">
        <button
          type="button"
          class="flex items-center w-full"
          @click="openAccordion(item.id)"
        >
          <ArrowComponent
            :direction="item.active ? 'down' : 'right'"
            data-aos="zoom-in-up"
            data-aos-delay="0"
          />
          <span
            class="ml-6 uppercase text-2xl"
            data-aos="zoom-in-up"
            data-aos-delay="50"
          >
            {{ item.label }}
          </span>
        </button>
        <div
          class="transition-height duration-300 ease-in-out my-5"
          :class="item.active ? 'h-full' : 'h-0'"
        >
          <p
            v-show="item.active"
            class="m-4"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            {{ item.content }}
          </p>
        </div>
        <img
          :src="require('@/assets/faq3.png')"
          alt="line"
          class="absolute -bottom-8 w-full"
          data-aos="zoom-in-up"
          data-aos-delay="150"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ArrowComponent from "./arrowComponent.vue"

export default {
  name: "faqComponent",
  components: { ArrowComponent },
  props: {
    items: { type: Array, default: () => [] },
  },
  data: () => ({
    label: "FAQ",
    itemsToRender: [],
  }),
  created() {
    this.items.forEach((item, index) => {
      item.active = index === 0
      item.id = index + 1

      this.itemsToRender.push(item)
    })
  },
  methods: {
    openAccordion(id) {
      this.itemsToRender.map((item) => {
        if (item.id === id) {
          item.active = !item.active
        } else {
          item.active = false
        }
      })
    },
  },
}
</script>
