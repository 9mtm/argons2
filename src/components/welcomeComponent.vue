<template>
  <section
    class="grid md:grid-cols-2 grid-cols-1 container mx-auto text-center items-center justify-center"
  >
    <img
      :src="image"
      alt="welcome image"
      class="animate-bounce animation-duration-6000"
      data-aos="zoom-in-up"
    />
    <div class="text-white ml-4" data-aos="zoom-in-up">
      <h2>{{ label }}</h2>
      <p v-for="(c, cc) in captions" :key="cc" class="text-center">
        {{ c }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "welcomeComponent",
  data: () => ({
    label: "Welcome to the world of Argons",
    captions: [
      "We are on a mission to CHANGE THE WAY PEOPLE THINK ABOUT NFT",
      "This Argons collection contains 8000 unique NFTs divided to 5000 male and 3000 female, including 50 senators and 2000 VIP custom designs.",
      "The Argons NFTs are stored as ERC- 721 on the Ethereum blockchain and hosted on IPFS.",
      "Each NFT has special abilities it will give you access to join the metaverse and Argon fighters Game with 3D characters",
    ],
    image: require("@/assets/7545-1.png"),
    cover: require("../assets/bg/Web BackgroundMod-03.png"),
  }),
}
</script>
