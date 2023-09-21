<template>
  <div class="q-pa-md">
    <div class="q-pb-md">
      <span
        class="text-h4 text-bold text-weight-medium text-bold text-indigo-10"
        >Select your plan</span
      ><br />
      <span class="text-subtitle2 text-weight-medium text-grey-9"
        >You have the option of monthly or yearly billing.</span
      >
    </div>
    <div class="flex flex-center row justify-between">
      <template v-for="(plan, index) in plans" :key="index">
        <q-card
          v-if="planType === plan.planType"
          :class="
            'my-card-plan ' +
            (selectedPlan === plan.name ? 'selected-plan' : '')
          "
          @click="setPlan(plan.name, index)"
        >
          <q-card-section>
            <q-avatar>
              <img
                v-if="plan.name === 'Arcade'"
                src="../assets/images/icon-arcade.svg"
              />
              <img
                v-if="plan.name === 'Advanced'"
                src="../assets/images/icon-advanced.svg"
              />
              <img
                v-if="plan.name === 'Pro'"
                src="../assets/images/icon-pro.svg"
              />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-indigo-10 text-subtitle1 text-bold">
              {{ plan.name }}
            </div>
            <div caption class="text-grey-9">{{ `$${plan.value}/mo` }}</div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-indigo-10 text-bold"
            >
              {{ `${plan.freeMonths} months free` }}
            </div>
          </q-card-section>
        </q-card>
      </template>
    </div>
    <div class="q-mt-lg">
      <q-banner class="bg-teal-1 banner-plan">
        <span
          :class="
            (planType === 'Monthly' ? 'text-indigo-10' : 'text-grey-6') +
            ' text-bold'
          "
          >Monthly</span
        >
        <q-toggle
          v-model="planType"
          color="primary"
          false-value="Monthly"
          true-value="Yearly"
          keep-color
          @update="resetSelectPlan"
        />
        <span
          :class="
            (planType === 'Yearly' ? 'text-indigo-10' : 'text-grey-6') +
            ' text-bold'
          "
          >Yearly</span
        >
      </q-banner>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref } from "vue";

const plans = [
  {
    name: "Arcade",
    value: 9,
    planType: "Monthly",
  },
  {
    name: "Advanced",
    value: 12,
    planType: "Monthly",
  },
  {
    name: "Pro",
    value: 15,
    planType: "Monthly",
  },
  {
    name: "Arcade",
    value: 90,
    freeMonths: 2,
    planType: "Yearly",
  },
  {
    name: "Advanced",
    value: 120,
    freeMonths: 2,
    planType: "Yearly",
  },
  {
    name: "Pro",
    value: 150,
    freeMonths: 2,
    planType: "Yearly",
  },
];

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      planType: ref("Monthly"),
      selectedPlan: ref(""),
      selectedIndex: ref(null),
      name: ref(""),
      email: ref(""),
      phoneNumber: ref(""),
      plans,
    };
  },
  watch: {
    planType() {
      this.selectedPlan = "";
      this.selectedIndex = null;
    },
  },
  computed: {
    selectedPlanObject() {
      return plans[this.selectedIndex] ?? "";
    },
  },
  methods: {
    setPlan(plan, index) {
      this.selectedPlan = plan;
      this.selectedIndex = index;
    },
    verificaEmailValidacoes(email) {
      if (!this.validaEmail(email)) {
        return "Insira um e-mail válido";
      }
      return true;
    },
    validaEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validarCelular(celular) {
      debugger;
      if (!celular || celular.length !== 11) {
        return "Esse campo deve possuir 11 dígitos";
      }
      if (
        celular.substring(0, 2) === "00" ||
        celular.substring(0, 2) === "01" ||
        celular.substring(0, 2) === "02" ||
        celular.substring(0, 2) === "03" ||
        celular.substring(0, 2) === "04" ||
        celular.substring(0, 2) === "05" ||
        celular.substring(0, 2) === "06" ||
        celular.substring(0, 2) === "07" ||
        celular.substring(0, 2) === "08" ||
        celular.substring(0, 2) === "09" ||
        celular.substring(0, 2) === "10" ||
        celular.substring(0, 2) === "20" ||
        celular.substring(0, 2) === "23" ||
        celular.substring(0, 2) === "25" ||
        celular.substring(0, 2) === "26" ||
        celular.substring(0, 2) === "29" ||
        celular.substring(0, 2) === "30" ||
        celular.substring(0, 2) === "36" ||
        celular.substring(0, 2) === "39" ||
        celular.substring(0, 2) === "40" ||
        celular.substring(0, 2) === "50" ||
        celular.substring(0, 2) === "52" ||
        celular.substring(0, 2) === "56" ||
        celular.substring(0, 2) === "57" ||
        celular.substring(0, 2) === "58" ||
        celular.substring(0, 2) === "59" ||
        celular.substring(0, 2) === "60" ||
        celular.substring(0, 2) === "70" ||
        celular.substring(0, 2) === "72" ||
        celular.substring(0, 2) === "76" ||
        celular.substring(0, 2) === "78" ||
        celular.substring(0, 2) === "80" ||
        celular.substring(0, 2) === "90"
      ) {
        return "Insira um DDD válido.";
      }
      if (celular.substring(2, 3) !== "9") {
        return "Depois do DDD, o número de celular deve começar com 9";
      }
      return true;
    },
  },
});
</script>

<style></style>
