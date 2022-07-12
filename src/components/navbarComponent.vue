<template>
  <nav
    class="bg-gradient-to-t px-2 sm:px-4 py-2.5 rounded text-white absolute w-full inset-x-0 top-0 z-10 bg-gray-800 z-50"
  >
    <div
      v-if="menu"
      class="fixed w-full inset-x-0 top-0"
      style="background-color: #151d3b"
    >
      <div class="my-4 mx-4 flex justify-end items-center">
        <close-icon :size="40" class="cursor-pointer" @click="menu = false" />
      </div>
      <ul>
        <li
          v-for="link in links"
          :key="link.label"
          class="mb-1"
          @click="menu = false"
        >
          <a
            :href="link.href + (link.hash ? link.hash : '')"
            class="block p-4 text-sm font-semibold text-gray-100 hover:bg-gray-100 hover:text-black rounded"
            :v-smooth-scroll="link.external"
            :target="link.external ? '_blank' : ''"
            @click="scrollToPosition(link)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>

    <div
      v-show="!menu"
      class="flex justify-between items-center mx-auto container"
    >
      <div class="flex md:order-2 w-full md:w-auto items-center">
        <menu-icon
          :size="50"
          class="visible md:invisible h-12 w-12 cursor-pointer"
          @click="menu = true"
        />
        <button type="button" class="btn btn-outlined ml-auto p-1">
          <img src="@/assets/wEB2-27.png" alt="DISCORD" class="w-8" />
          <span class="ml-2">discord</span>
        </button>
      </div>
      <img
        :src="logo"
        alt="logo"
        class="h-16 hidden md:inline-block cursor-pointer"
        @click="$router.push('/')"
      />
      <div
        class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-4"
      >
        <ul class="nav-items">
          <li v-for="link in links" :key="link.label" class="nav-item">
            <component
              :is="link.badge === 'soon' ? 'span' : 'a'"
              :href="link.href + (link.hash ? link.hash : '')"
              class="py-2 relative"
              :class="{ 'cursor-not-allowed': link.badge === 'soon' }"
              :target="link.external ? '_blank' : ''"
              @click="scrollToPosition(link)"
            >
              <span
                v-if="link.badge && link.badge !== ''"
                class="bg-blue-700 text-white py-0.5 px-1 absolute -top-2 -right-4 z-10 text-xs rounded-lg"
              >
                {{ link.badge }}
              </span>
              <span>{{ link.label }}</span>
            </component>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue"
import CloseIcon from "vue-material-design-icons/Close.vue"

export default {
  name: "NavbarComponent",
  components: { CloseIcon, MenuIcon },
  props: {
    links: { type: Array, default: () => [] },
    socials: { type: Array, default: () => [] },
    logo: { type: String, default: "" },
  },
  data: () => ({
    connectImgBtn: require("@/assets/wEB2-25.png"),
    menu: false,
  }),
  methods: {
    scrollToPosition({ external, hash }) {
      if (!external && hash) {
        this.$smoothScroll({
          scrollTo: document.querySelector(hash),
          hash: hash,
        })
      }
    },
  },
}
</script>
