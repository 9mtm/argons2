<template>
  <div class="home">
    <section class="relative h-screen">
      <div class="flex justify-center items-center h-full container mx-auto">
        <div
          class="text-center relative h-full flex justify-center items-center z-20"
        >
          <img
            :src="require('@/assets/wEB2-01.png')"
            alt="top"
            class="w-full"
          />
          <div
            v-if="false"
            class="absolute inset-x-0 bottom-10 md:bottom-20 mx-4 md:inset-x-auto"
          >
            <a
              class="btn btn-outlined mt-10"
              :href="discord.href"
              target="_blank"
            >
              <img
                src="@/assets/wEB2-27.png"
                alt="DISCORD"
                class="w-8 md:w-16"
              />
              <span class="mx-2">join our discord</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <WelcomeComponent />
    <VideoComponent id="story" />
    <SenatorsComponent
      :items="argons"
      :slides-to-show="2"
      label="THE ARGONS NFTs"
      caption="The 8,000 Argons MALE & FEMALE NFTs are coming with a unique design"
      :center-scaled="true"
    />
    <PowerComponent :items="listOfPowers" />
    <SenatorsComponent
      :items="senators"
      :bottom="false"
      :slides-to-show="1"
      label="THE SENATORS NFTs"
      caption="In this collection, there are 50 senators with special helmets. Senators are the first who believed in their leader Argon and crossed with him to the next dimension. Senators will have special rewards from the collection and they will have free access to the tournament in the Argons game, the senators will have complete overwatch to protect the rest of the argons community and council them in the game."
    />
    <RoadMapComponent id="road-map" :items="roadMapItems" />
    <VideoComponent target="trailer" id="trailer" />
    <ArtsComponent id="arts" />
    <DownloadComponent />
    <FaqComponent :items="faqList" id="faq" />
    <TeamComponent v-if="false" :team="team" id="team" />
  </div>
</template>

<script>
import VideoComponent from "@/components/videoComponent.vue"
import SenatorsComponent from "@/components/senatorsComponent.vue"
import ArtsComponent from "@/components/artsComponent.vue"
import DownloadComponent from "@/components/downloadComponent.vue"
import FaqComponent from "@/components/faqComponent.vue"
import TeamComponent from "@/components/teamComponent.vue"
import WelcomeComponent from "@/components/welcomeComponent.vue"
import PowerComponent from "@/components/powerComponent.vue"
import RoadMapComponent from "@/components/roadMapComponent.vue"

export default {
  name: "HomeView",
  components: {
    VideoComponent,
    SenatorsComponent,
    ArtsComponent,
    DownloadComponent,
    FaqComponent,
    TeamComponent,
    WelcomeComponent,
    PowerComponent,
    RoadMapComponent,
  },
  data: () => ({
    discord: {
      href: "https://discord.gg/TfExjYwbAK",
    },
    argons: [
      { src: require("@/assets/argons/1.png") },
      { src: require("@/assets/argons/2.png") },
      { src: require("@/assets/argons/3.png") },
      { src: require("@/assets/argons/4.png") },
      { src: require("@/assets/argons/5.png") },
      { src: require("@/assets/argons/6.png") },
      { src: require("@/assets/argons/7.png") },
      { src: require("@/assets/argons/8.png") },
      { src: require("@/assets/argons/9.png") },
      { src: require("@/assets/argons/10.png") },
      { src: require("@/assets/argons/11.png") },
    ],
    senators: [
      { src: require("@/assets/senators/1.png") },
      { src: require("@/assets/senators/2.png") },
      { src: require("@/assets/senators/3.png") },
      { src: require("@/assets/senators/4.png") },
      { src: require("@/assets/senators/5.png") },
      { src: require("@/assets/senators/6.png") },
      { src: require("@/assets/senators/7.png") },
      { src: require("@/assets/senators/8.png") },
    ],
    listOfPowers: [
      {
        image: require("@/assets/power/wEB22-02.png"),
        label: "earth power",
        color: "green",
      },
      {
        image: require("@/assets/power/wEB22-03.png"),
        label: "water power",
        color: "violet",
      },
      {
        image: require("@/assets/power/wEB22-04.png"),
        label: "air power",
        color: "grey",
      },
      {
        image: require("@/assets/power/wEB22-05.png"),
        label: "fire power",
        color: "red",
      },
    ],
    faqList: [
      {
        label: "When is the official launch?",
        content:
          "The official Argons launch date is to be announced. Further updates will be revealed on our official Discord.",
      },
      {
        label: "How can I buy an a Argons?",
        content:
          "You will be able to buy on our website when we launch. Join our discord to have more information about our launch date.",
      },
      {
        label: "How can I join the whitelist?",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Plac quisquam optio accusamus corrupti quaerat",
      },
      {
        label: "What is the mint price?",
        content:
          "The mint price is to be announced. Join our Discord for the further updates.",
      },
      {
        label: "How can I use my NFT?",
        content:
          "You will be able to use your Argons as an avatar in the Metaverse and in the Argon game .",
      },
      {
        label: "What blockchain will you be using?",
        content: "The Ethereum Blockchain.",
      },
      {
        label: "Will you do giveaways?",
        content:
          "Of course! Check out the giveaways channel in our discord for more information.",
      },
      {
        label: "What are the royalties?",
        content: "5% secondary sale royalties",
      },
      {
        label: "Still have any questions?",
        content: "Go ahead to our Discord and feel free to ask anything.",
      },
    ],
    team: [
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
      {
        avatar: require("@/assets/team/1.png"),
        name: "john doe",
        position: "CEO",
      },
    ],
    roadMapItems: [
      {
        image: require("@/assets/percent/rodmap0.png"),
        label: "INITIAL SALE",
        description:
          "We will give 30 NFT's for free , to participate in the giveaway follow us on twitter and instegram and to our discord channel, the winners will be announced in the discord giveaway room.",
        more: [
          "Public sale: We will be releasing the argons collection and we will announce the launching time in our discord. also we will have giveaway.",
          "NFTs giveaway: We will give 30 NFT's for free , to participate in the giveaway follow us on twitter and instegram and to our discord channel, the winners will be announced in the discord giveaway room.",
        ],
      },
      {
        image: require("@/assets/percent/rodmap30.png"),
        label: "VIP costume design",
        description:
          "Make your own design or we will make the design that you want for your Argon's character and we'll add it to the collection so your unique character will be part of the Argons community.",
        more: [
          "This service will let you design your own argons character , or we design it for you based on your suggestions (any type of tattoo or headwear or bodywear....etc) and we'll add it to our argons collection , you will be able to use the 3D model of your character in the game and the metaverse.",
        ],
      },
      {
        image: require("@/assets/percent/rodmap60.png"),
        label: "Community app",
        description:
          "soon we will launch the first mobile app that specialises purley in the NFT world it will include all the projects presented in this field and will help you make the correct",
        more: [
          "We are going to launch the aragons app on IOS and Android , it will be the first app developed purly for NFT community and Collections.",
          "This app will help you find succeful projects that you can invest in and will help understand the invesment risk after you see recomendations from experts in this field.",
          "you can join groups that helps you answer all yous questions,",
          "you can also advertise diffrent NFTs that you own for free.",
        ],
      },
      {
        image: require("@/assets/percent/rodmap100.png"),
        label: "play to earn (p2e)",
        description:
          "this game let's you earn alot of money by upgrading your own character and sell it in the Argon's market or by wining tournments with prizes that can reach 4 ETH.",
        more: [
          "The final step in the project the most profitable NFT game in all the NFT world.",
          "until we finish developing the game , the Argons community will be able to make profit from the projects mentioned before.",
          "The Argon Warriors",
          "it's a combat game which contains a collection of offensive and defensive moves and diffrent special abilities.",
          "you won't need any keyboard and mouse skills but you will need to test your gaming skills to defeat ypu opponent.",
          "you can upgrade your character by increasing your level this will be an online pvp game with diffrent modes and there will be monthly tournments with rewards that can reach 2 ether also there will be annual tournments with rewards that could reach 4 ether the game will be coming to pc and will be exclusive to our NFT holders",
          "All the game updates and informations about the game will be posted in our discord",
        ],
      },
    ],
  }),
}
</script>
