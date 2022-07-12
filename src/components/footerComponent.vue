<template>
  <footer class="text-white container mx-auto mt-16 overflow-hidden">
    <div class="flex justify-center my-6">
      <a
        v-for="(social, s) in socials"
        :key="s"
        type="button"
        class="mx-2"
        :href="social.href"
        target="_blank"
        data-aos="zoom-in-up"
        :data-aos-delay="s * 100"
      >
        <img :src="social.src" :alt="`social-${s}`" class="h-16" />
      </a>
    </div>
    <div class="flex justify-center my-6">
      &copy; 2022 - {{ new Date().getFullYear() }} Argon
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerComponent",
  props: {
    links: { type: Array, default: () => [] },
    socials: { type: Array, default: () => [] },
  },
}
</script>
