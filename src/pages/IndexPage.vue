<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <q-card-section horizontal class="full-height">
        <q-card-section class="col-4 col-md-4">
          <q-img
            class="img-step"
            src="../assets/images/bg-sidebar-desktop.svg"
          />
          <StepperComponent :actualStep="step" />
        </q-card-section>
        <q-card-section class="col-7 col-md-7">
          <Step1Info @stepTo="stepTo" ref="step1" v-if="step === 1" />
          <Step2Plan v-if="step === 2" />
          <Step3On v-if="step === 3" />
          <Step4Summary @stepTo="stepTo" v-if="step === 4" />
          <StepSucessful v-if="step > 4" />
          <q-space />
          <div class="q-ma-md" v-if="step <= 4">
            <div class="row flex flex-right">
              <q-btn
                v-if="step > 1"
                flat
                color="grey-6"
                @click="prevTo"
                label="Go Back"
                class="btn-step"
              />
              <div class="col self-end"></div>
              <q-btn
                :disable="nextStep2Condition"
                @click="nextTo"
                color="indigo-10"
                class="btn-step btn-step-next"
                :label="step === 4 ? 'Confirm' : 'Next Step'"
              />
            </div>
            <div class="row flex flex-LEFT">
              <div class="col self-end"></div>
            </div>
          </div>
          <div></div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref } from "vue";
import { Loading } from "quasar";
import { mapGetters, mapState, mapActions } from "vuex";
import StepperComponent from "../components/StepperComponent.vue";
import Step1Info from "../components/Step1Info.vue";
import Step2Plan from "../components/Step2Plan.vue";
import Step3On from "../components/Step3On.vue";
import Step4Summary from "../components/Step4Summary.vue";
import StepSucessful from "../components/StepSucessful.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    StepperComponent,
    Step1Info,
    Step2Plan,
    Step3On,
    Step4Summary,
    StepSucessful,
  },
  setup() {
    return {
      step: ref(1),
    };
  },
  computed: {
    ...mapState("Step", ["step1", "step2", "step3"]),
    nextStep2Condition() {
      return this.step === 2 && !this.step2.name;
    },
  },
  methods: {
    ...mapActions("Step", ["clearStep2", "clearStep3"]),
    prevTo() {
      if (this.step > 1) {
        this.step -= 1;
      }
    },
    async nextTo() {
      if (this.step === 1) {
        this.clearStep2();
        await this.$nextTick();
        this.$refs.step1.submitForm();
      } else if (this.step === 2) {
        this.clearStep3();
        this.stepTo(3);
      } else if (this.step === 3) {
        this.stepTo(4);
      } else if (this.step === 4) {
        this.showLoadingWithMessage("Finalizando pedido...");
        setTimeout(() => {
          this.stepTo(5);
          this.hideLoading();
        }, 2000);
      }
    },
    stepTo(step) {
      this.step = step;
    },
    showLoadingWithMessage(message) {
      return Loading.show({ message });
    },
    hideLoading() {
      return Loading.hide();
    },
  },
});
</script>
