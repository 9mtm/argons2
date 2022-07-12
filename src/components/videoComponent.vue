<template>
  <section class="container mx-auto overflow-hidden">
    <h2 class="text-center" data-aos="fade-in">
      {{ isStory ? "the story" : "the argons fighters game" }}
    </h2>
    <iframe
      class="h-screen w-full my-10"
      :src="videoSrc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      data-aos="fade-in"
    ></iframe>
  </section>
</template>

<script>
export default {
  name: "VideoComponent",
  props: {
    target: { type: String, default: "story" },
  },
  data: () => ({
    videoPlay: require("@/assets/Layer 40.png"),
    showVideoPlayer: false,
    cover: require("../assets/bg/Web BackgroundMod-02.png"),
  }),
  computed: {
    isStory() {
      return this.target === "story"
    },
    videoBg() {
      return require(`@/assets/video-${this.isStory ? 1 : 2}.png`)
    },
    videoSrc() {
      return this.isStory
        ? "https://www.youtube-nocookie.com/embed/_uPKVwwYQ_U"
        : "https://www.youtube-nocookie.com/embed/MGpzH2kgAMQ"
    },
  },
}
</script>
