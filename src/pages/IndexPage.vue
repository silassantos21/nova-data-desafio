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
          <Step1Info @stepTo="stepTo" ref="step1Ref" v-if="step === 1" />
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
import { defineComponent, ref, nextTick, computed } from "vue";
import { Loading } from "quasar";
// import { mapGetters, mapState, mapActions } from "vuex";
import { useStore } from "vuex";
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
    const store = useStore();

    const step1Ref = ref(null);

    const step2 = computed(() => {
      return store.getters["Step/step2"];
    });

    const step = ref(1);

    const nextStep2Condition = computed(() => {
      return step.value === 2 && step2.value.name;
    });

    const nextTo = async () => {
      if (step.value === 1) {
        store.dispatch("Step/clearStep2");
        await nextTick();
        step1Ref.value.submitForm();
      } else if (step.value === 2) {
        store.dispatch("Step/clearStep3");
        stepTo(3);
      } else if (step.value === 3) {
        stepTo(4);
      } else if (step.value === 4) {
        showLoadingWithMessage("Finalizando pedido...");
        setTimeout(() => {
          stepTo(5);
          hideLoading();
        }, 2000);
      }
    };

    const prevTo = () => {
      if (step.value > 1) {
        step.value -= 1;
      }
    };

    const stepTo = (stepVal) => {
      step.value = stepVal;
    };

    const showLoadingWithMessage = (message) => {
      return Loading.show({ message });
    };

    const hideLoading = () => {
      return Loading.hide();
    };

    return {
      step1Ref,
      step2,
      step,
      nextStep2Condition,
      nextTo,
      prevTo,
      stepTo,
      showLoadingWithMessage,
      hideLoading,
    };
  },
});
</script>
