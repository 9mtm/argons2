<template>
  <section class="text-white container mx-auto">
    <div class="mx-auto grid grid-flow-col md:px-32 gap-44 items-center">
      <div class="col-span-4 md:col-span-1" data-aos="zoom-in-right">
        <ul class="flex justify-center text-center mb-4 uppercase">
          <li
            :class="[
              'mx-2',
              'transition-colors',
              'border-b-2',
              activeAppTheme === 1 ? 'border-white' : 'border-transparent',
            ]"
          >
            <a href="#" class="inline-flex py-2" @click="activeAppTheme = 1">
              light
            </a>
          </li>
          <li
            :class="[
              'mx-2',
              'transition-colors',
              'border-b-2',
              activeAppTheme === 2 ? 'border-white' : 'border-transparent',
            ]"
          >
            <a href="#" class="inline-flex py-2" @click="activeAppTheme = 2">
              dark
            </a>
          </li>
        </ul>
        <img
          :src="require(`@/assets/mobile-app/${activeAppTheme}.gif`)"
          alt="mobile app"
        />
      </div>
      <div class="col-span-4 md:col-span-1 capitalize" data-aos="zoom-in-left">
        <h2>{{ label }}</h2>
        <p class="my-5">
          we are going to launch the aragons app on IOS and Android, it will be
          the first app developed purely for the NFT community and projects this
          app will help you find successful projects that you can invest in and
          understand the investment risk after you see recommendations from
          experts in this field you can join groups that help you answer all
          your questions also you can sell, buy or trade your NFTs with other
          members
        </p>
        <img
          :src="require('@/assets/app-store-1.png')"
          alt=""
          class="w-auto h-16 mx-auto"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "downloadComponent",
  data: () => ({
    label: "ARGONS COMMUNITY APP",
    activeAppTheme: 1,
  }),
  created() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.activeAppTheme = 2
    }
  },
}
</script>
