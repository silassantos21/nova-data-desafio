<template>
  <div class="q-pa-md">
    <div class="q-pb-lg">
      <span
        class="text-h4 text-bold text-weight-medium text-bold text-indigo-10"
        >Pick add-ons</span
      ><br />
      <span class="text-subtitle2 text-weight-medium text-grey-9"
        >Add-ons help enhace your gaming experience.</span
      >
    </div>
    <div class="flex flex-center row">
      <q-card class="col-12 bg-light-blue-step">
        <q-card-section horizontal>
          <q-card-section>
            <div class="text-indigo-10 text-subtitle1 text-bold">
              Arcade(Monthly)
            </div>
            <div caption class="text-grey-9 step-link">Change</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-indigo-10 text-bold"
            >
              +$1/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-indigo-10 text-bold"
            >
              +$10/yr
            </div>
          </q-card-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section horizontal v-if="isOnlineService">
          <q-card-section>
            <div caption class="text-grey-9">Online Service</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-subtitle2 text-indigo-10"
            >
              +$1/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-subtitle2 text-indigo-10"
            >
              +$10/yr
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal v-if="isLargerStorage">
          <q-card-section>
            <div caption class="text-grey-9">Larger storage</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-subtitle2 text-indigo-10"
            >
              +$1/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-subtitle2 text-indigo-10"
            >
              +$10/yr
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal v-if="isCustomizableProfile">
          <q-card-section>
            <div caption class="text-grey-9">Customizable profile</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-subtitle2 text-indigo-10"
            >
              +$1/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-subtitle2 text-indigo-10"
            >
              +$10/yr
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="col-12 q-mt-md" flat>
        <q-card-section horizontal class="items-center">
          <q-card-section>
            <div caption class="text-grey-9">Total(per month)</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-h6 text-indigo-10 text-bold"
            >
              +$1/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-h6 text-indigo-10 text-bold"
            >
              +$10/yr
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      planType: ref("Monthly"),
      isOnlineService: ref(true),
      isLargerStorage: ref(true),
      isCustomizableProfile: ref(false),
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
