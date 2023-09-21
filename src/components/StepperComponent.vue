<template>
  <q-stepper
    v-model="step"
    header-nav
    active-color="teal-1"
    active-icon="none"
    flat
    vertical
  >
    <q-step
      :name="1"
      title="STEP 1"
      caption="YOUR INFO"
      class="material-symbols-outlined"
      prefix="1"
      :header-nav="step > 1"
    >
    </q-step>

    <q-step
      :name="2"
      title="STEP 2"
      caption="SELECT PLAN"
      prefix="2"
      :header-nav="step > 2"
    >
    </q-step>

    <q-step
      :name="3"
      title="STEP 3"
      caption="ADD ONS"
      class="material-symbols-outlined"
      prefix="3"
      :header-nav="step > 3"
    >
    </q-step>
    <q-step
      :name="4"
      title="STEP 4"
      caption="SUMMARY"
      prefix="4"
      :header-nav="step > 4"
    >
    </q-step>
    <!-- <template v-slot:navigation>
      <q-stepper-navigation>
        <q-btn
          @click="$refs.stepper.next()"
          color="primary"
          :label="step === 4 ? 'Confirm' : 'Next Step'"
        />
        <q-btn
          v-if="step > 1"
          flat
          color="primary"
          @click="$refs.stepper.previous()"
          label="Go Back"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </template> -->
  </q-stepper>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  props: ["actualStep"],
  name: "StepperComponent",
  computed: {
    step() {
      return this.actualStep;
    },
  },
};
</script>
