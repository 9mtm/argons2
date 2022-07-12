<template>
  <img
    :src="require(`@/assets/wEB2-16.png`)"
    alt="arrow"
    :class="[
      'w-12',
      'transition-transform',
      'duration-300',
      'ease-in-out',
      'transform',
      rotate,
      big ? 'scale-125' : '',
    ]"
  />
</template>

<script>
export default {
  name: "arrowComponent",
  props: {
    direction: { type: String, default: "right" },
    big: { type: Boolean, default: false },
  },
  computed: {
    rotate() {
      switch (this.direction) {
        case "up":
          return "-rotate-90"
        case "down":
          return "rotate-90"
        case "left":
          return "rotate-180"
        default:
          return "rotate-0"
      }
    },
  },
}
</script>
