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
  </q-stepper>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "StepperComponent",
  props: {
    actualStep: Number,
  },
  setup(props, { emit }) {
    const step = computed(() => {
      return props.actualStep;
    });
    return {
      step,
    };
  },
});
</script>
