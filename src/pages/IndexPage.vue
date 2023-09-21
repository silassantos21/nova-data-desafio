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
          <Step1Info v-if="step === 1" />
          <Step2Plan v-if="step === 2" />
          <Step3On v-if="step === 3" />
          <Step4Summary v-if="step === 4" />
          <StepSucessful v-if="step > 4" />
          <q-space />
          <div class="q-ma-md" v-if="step <= 4">
            <div class="row flex flex-right">
              <q-btn
                v-if="step > 1"
                flat
                color="primary"
                @click="prevTo"
                label="Go Back"
                class="q-ml-sm"
              />
              <div class="col self-end"></div>
              <q-btn
                @click="nextTo"
                color="primary"
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
  methods: {
    prevTo() {
      if (this.step > 1) {
        this.step -= 1;
      }
    },
    nextTo() {
      this.step += 1;
    },
  },
});
</script>
