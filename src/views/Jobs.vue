<template>
  <header
    class="h-screen w-screen bg-cover flex items-center relative"
    :style="`background-image: url(${require('@/assets/jobs-bg.svg')})`"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 container mx-auto">
      <div class="text-white">
        <h2 class="mb-5" data-aos="zoom-in-right" :data-aos-delay="50">
          CALLING ALL SKATERS
        </h2>
        <p data-aos="zoom-in-right" :data-aos-delay="100">
          We're looking for creative builders, makers, and doers. The ones who
          share our passion for web3, art, and culture. We're building for an
          open metaverse. Hope you don't mind breaking a few rules along the
          way.
        </p>
        <div
          class="mt-10 inline-block"
          data-aos="zoom-in-right"
          :data-aos-delay="150"
        >
          <a class="btn btn-outlined" href="#jobs">
            <span class="mx-2">open position</span>
            <ArrowDown :size="30" />
          </a>
        </div>
      </div>
    </div>
  </header>

  <div id="jobs" class="container mx-auto mt-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(job, j) in jobsList"
        :key="j"
        class="card-clickable p-5"
        data-aos="fade-in"
        :data-aos-delay="j * 50"
        @click="openModal(job.id)"
      >
        <h3 class="mb-5 flex items-center">
          <Briefcase-icon :size="30" />
          <span class="mx-2">{{ job.title }}</span>
        </h3>
        <p>{{ job.exerpt }}</p>
        <div class="flex justify-end">
          <div class="flex justify-center items-center uppercase">
            <span class="mx-2">read more</span>
            <ArrowRight :size="30" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="modal" class="modal scale-100">
    <div class="modal-header">
      <close-icon
        :size="40"
        class="cursor-pointer ml-auto"
        @click="closeModal"
      />
    </div>
    <div class="modal-body">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 class="mb-5" data-aos="fade-in-up">{{ activeJob?.title }}</h3>
          <p
            v-html="activeJob?.desc"
            data-aos="fade-in-up"
            :data-aos-delay="100"
          ></p>
        </div>

        <Form @submit.prevent v-slot="{ meta }">
          <h3 class="mb-5">your proposal</h3>
          <div
            v-for="(input, f) in fields"
            :key="f"
            class="mb-5"
            data-aos="zoom-in-up"
            :data-aos-delay="f * 50"
          >
            <label
              :for="input.id"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
            >
              {{ input.label }} ({{
                input.rules && input.rules.split("|").includes("required")
                  ? "required"
                  : "optional"
              }})
            </label>
            <Field :name="input.id" :rules="input.rules" v-slot="{ field }">
              <component
                :is="input.type === 'textarea' ? 'textarea' : 'input'"
                v-model="form[input.id]"
                v-bind="field"
                rows="5"
                :type="input.type"
                :id="input.id"
                class="input-field"
                :placeholder="input.label"
              />
            </Field>
            <ErrorMessage
              :name="input.id"
              class="text-red-500 font-bold block p-2 capitalize"
            />
          </div>
          <button
            class="bg-blue-800 text-white md:text-2xl rounded-3xl mt-10 p-2 uppercase font-bold flex justify-center items-center hover:bg-blue-500 transition-colors ease-in-out duration-300 w-full"
            :class="!meta.valid ? 'cursor-wait opacity-25' : ''"
            @click="!meta.valid ? null : send"
          >
            <loading-icon v-if="loading" class="animate-spin" />
            <span v-else>send</span>
          </button>
        </Form>
      </div>
    </div>
  </div>

  <!-- toast -->
  <div
    v-show="toast.open"
    class="flex items-center mx-4 mt-2 w-auto p-4 rounded-lg shadow fixed z-50 top-0 inset-x-0 text-white"
    :class="isRequestSuccess ? 'bg-green-500' : 'bg-red-500'"
  >
    <div class="inline-flex items-center justify-center">
      <component
        :is="isRequestSuccess ? 'success-icon' : 'failed-icon'"
        :size="30"
      />
    </div>
    <div class="ml-3 font-normal">{{ toast.message }}</div>
    <close-icon
      :size="30"
      class="cursor-pointer ml-auto -mx-1.5 -my-1.5"
      @click="closeToast"
    />
  </div>
</template>

<script>
import { Field, Form, ErrorMessage, defineRule } from "vee-validate"
import ArrowDown from "vue-material-design-icons/ArrowDown.vue"
import ArrowRight from "vue-material-design-icons/ArrowRight.vue"
import CloseIcon from "vue-material-design-icons/Close.vue"
import BriefcaseIcon from "vue-material-design-icons/Briefcase.vue"
import LoadingIcon from "vue-material-design-icons/Loading.vue"
import FailedIcon from "vue-material-design-icons/AlertCircle.vue"
import SuccessIcon from "vue-material-design-icons/CheckCircle.vue"
import { required, email, url } from "@vee-validate/rules"

// define rules
defineRule("required", required)
defineRule("email", email)
defineRule("url", url)
defineRule("phone", (value) => {
  const MOBILEREG = /^((1[3578][0-9])+\d{8})$/
  return MOBILEREG.test(value) ? "" : "The phone number is not valid"
})

export default {
  name: "JobsView",
  components: {
    ArrowDown,
    ArrowRight,
    // icons
    CloseIcon,
    BriefcaseIcon,
    LoadingIcon,
    FailedIcon,
    SuccessIcon,
    // vee validate
    Field,
    Form,
    ErrorMessage,
  },
  data: () => ({
    fields: [
      {
        label: "Full Name",
        id: "name",
        type: "text",
        rules: "required",
      },
      {
        label: "Your Email",
        id: "email",
        type: "email",
        rules: "required|email",
      },
      {
        label: "Your Phome",
        id: "phone",
        type: "tel",
        rules: "required",
      },
      {
        label: "Your Linkedin Profile",
        id: "linkedin",
        type: "url",
        rules: "url",
      },
      {
        label: "Your Portfolio Website",
        id: "portfolio",
        type: "url",
        rules: "url",
      },
      {
        label: "Tell Us More?",
        id: "more",
        type: "textarea",
        rules: "",
      },
    ],
    modal: false,
    activeJob: null,
    API: "https://jobs.argons.io/api/",
    jobsList: [],
    form: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      portfolio: "",
      more: "",
    },
    loading: false,
    toast: {
      open: false,
      color: "",
      message: "",
      status: 200,
    },
  }),
  computed: {
    isRequestSuccess() {
      return [200, 201].includes(this.toast.status)
    },
  },
  created() {
    this.axios.get(this.API + "jobs").then(({ data }) => {
      data.forEach((job) => {
        job.exerpt = job.desc.slice(0, 150) + "..."
        this.jobsList.push(job)
      })
    })
  },
  methods: {
    openModal(id) {
      this.modal = true
      this.activeJob = this.jobsList.find(
        (job) => Number(job.id) === Number(id),
      )
    },
    closeModal() {
      this.modal = false
      this.activeJob = {}
    },
    send() {
      this.loading = true
      this.axios
        .post(this.API + "email", { id: this.activeJob.id, ...this.form })
        .then((res) => {
          console.log(res)
          this.loading = false
          if (res.status === 200) {
            this.openToast("success", res.status)
            this.closeModal()
          } else {
            this.openToast("failed", res.status)
          }
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
          this.openToast("failed", 500)
        })
    },
    openToast(message, status) {
      this.toast.open = true
      this.toast.message = message
      this.toast.status = status

      setTimeout(() => {
        this.closeToast()
      }, 5000)
    },
    closeToast() {
      this.toast.open = false
      this.toast.message = this.toast.status = ""
      console.log("close")
    },
  },
}
</script>
