<template>
  <img :src="getSrc" alt="ring" class="w-full" />
</template>

<script>
export default {
  name: "RingComponent",
  props: {
    text: { type: Number, default: 0 },
    percent: { type: Boolean, default: false },
  },
  computed: {
    numberSize() {
      return this.percent ? 24 : 16
    },
    getSrc() {
      return require(`@/assets/${this.percent ? "percent" : "num"}/${
        this.text
      }.png`)
    },
  },
}
</script>
