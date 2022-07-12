<template>
  <section class="text-white container mx-auto">
    <div class="my-16 grid md:grid-cols-2 grid-cols-1 items-center">
      <img
        :src="require('@/assets/art.png')"
        alt="art"
        class="w-full"
        data-aos="zoom-in-right"
      />
      <div class="capitalize mx-2" data-aos="zoom-in-left">
        <h2>{{ label }}</h2>
        <p class="my-5">
          Our NFTs were designed by a group of professional artists that
          originally started with the handmade process on paper and then moved
          to digital art.
        </p>
        <p class="my-5">
          the style that is used is based on the expression and symbolic style,
          also, the symbols and icons drawn on the warrior's body and armor are
          influenced by ancient civilizations and different folklore cultures
          and express the emotions human felt during the war.
        </p>
        <p class="my-5">
          all designs and symbols are 100% original and designed by us. hope you
          enjoy it.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "artsComponent",
  data: () => ({
    label: "Art",
  }),
}
</script>
