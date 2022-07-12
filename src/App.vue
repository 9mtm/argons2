<template>
  <div class="h-full w-full relative dark:bg-gray-900">
    <img
      v-if="$route.path !== '/jobs'"
      :src="cover"
      alt="cover"
      class="h-screen w-screen fixed inset-0 object-cover z-10"
    />
    <div
      class="min-h-screen w-full relative overflow-x-hidden z-20 bg-opacity-30 bg-gray-900"
    >
      <NavbarComponent v-bind="{ links, logo, socials }" />
      <main class="h-full" @scroll="scrollHandler">
        <router-view />
      </main>
      <FooterComponent v-bind="{ links, socials }" id="contact" />

      <span
        v-show="showGoTop"
        class="fixed bottom-4 right-4 animate-bounce cursor-pointer"
        v-smooth-scroll
        @click="goTop"
      >
        <arrow-component direction="up" :big="false" />
      </span>
    </div>
  </div>
</template>

<script>
import AOS from "aos"
import "aos/dist/aos.css"
import NavbarComponent from "./components/navbarComponent.vue"
import FooterComponent from "./components/footerComponent.vue"
import arrowComponent from "./components/arrowComponent.vue"

export default {
  name: "App",
  components: {
    NavbarComponent,
    FooterComponent,
    arrowComponent,
  },
  data: () => ({
    // cover: require("./assets/bg/Web BackgroundMod-01.svg"),
    cover: require("./assets/bg/bg.png"),
    logo: require("@/assets/logo.png"),
    links: [
      {
        label: "Story",
        href: "/",
        hash: "#story",
        external: false,
      },
      {
        label: "Road Map",
        href: "/",
        hash: "#road-map",
        external: false,
      },
      {
        label: "How To Play",
        href: "https://argons.gitbook.io/docs/guide/argons-game",
        hash: "",
        external: true,
      },
      {
        label: "Arts",
        href: "/",
        hash: "#arts",
        external: false,
      },
      {
        label: "FAQ",
        href: "/",
        hash: "#faq",
        external: false,
      },
      // {
      //   label: "Team",
      //   href: "/",
      //   hash: "#team",
      //   external: false,
      // },
      {
        label: "Jobs",
        href: "/jobs",
        external: false,
      },
      {
        label: "Market",
        href: "/market",
        external: false,
        badge: "soon",
      },
      {
        label: "Contact",
        href: "/",
        hash: "#contact",
        external: false,
      },
    ],
    socials: [
      {
        src: require("@/assets/wEB2-26.png"),
        href: "https://twitter.com/argons_nft",
      },
      {
        src: require("@/assets/wEB2-27.png"),
        href: "https://discord.gg/TfExjYwbAK",
      },
      {
        src: require("@/assets/wEB2-28.png"),
        href: "https://www.instagram.com/argons.nft/",
      },
      {
        src: require("@/assets/wEB2-29.png"),
        href: "https://opensea.io/collection/argons",
      },
    ],
    showGoTop: false,
  }),
  mounted() {
    AOS.init()

    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight) {
        this.showGoTop = true
      } else {
        this.showGoTop = false
      }
    })
  },
  methods: {
    goTop() {
      this.$smoothScroll({
        scrollTo: document.querySelector("body"),
        hash: "#top",
      })
    },
  },
}
</script>
