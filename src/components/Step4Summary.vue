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
              {{ `${step2.name}(${step2.planType})` }}
            </div>
            <div caption class="text-indigo-10 step-link" @click="stepTo">
              Change
            </div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div caption class="text-indigo-10 text-bold">
              {{ `+$${step2.value}/${valueSufix}` }}
            </div>
          </q-card-section>
        </q-card-section>
        <q-separator inset />
        <q-card-section horizontal v-if="step3.isOnlineService.isActive">
          <q-card-section>
            <div caption class="text-grey-9">Online Service</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div caption class="text-subtitle2 text-indigo-10">
              {{ onlineServiceCondition }}
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal v-if="step3.isLargerStorage.isActive">
          <q-card-section>
            <div caption class="text-grey-9">Larger storage</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div caption class="text-subtitle2 text-indigo-10">
              {{ largerStorageCondition }}
            </div>
          </q-card-section>
        </q-card-section>
        <q-card-section horizontal v-if="step3.isCustomizableProfile.isActive">
          <q-card-section>
            <div caption class="text-grey-9">Customizable profile</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div caption class="text-subtitle2 text-indigo-10">
              {{ customizableProfileCondition }}
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
            <div caption class="text-h6 text-indigo-10 text-bold">
              {{ totalPlan }}
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Step1Info",
  setup(props, { emit }) {
    const store = useStore();

    const step2 = computed(() => {
      return store.getters["Step/step2"];
    });

    const step3 = computed(() => {
      return store.getters["Step/step3"];
    });

    const isOnlineServiceValue = computed(() => {
      return step2.value.planType === "Monthly"
        ? step3.value.isOnlineService.monthlyValue
        : step3.value.isOnlineService.yearlyValue;
    });

    const isLargerStorageValue = computed(() => {
      return step2.value.planType === "Monthly"
        ? step3.value.isLargerStorage.monthlyValue
        : step3.value.isLargerStorage.yearlyValue;
    });

    const isCustomizableProfileValue = computed(() => {
      return step2.value.planType === "Monthly"
        ? step3.value.isCustomizableProfile.monthlyValue
        : step3.value.isCustomizableProfile.yearlyValue;
    });

    const valueSufix = computed(() => {
      return step2.value.planType === "Monthly" ? "mo" : "yr";
    });

    const onlineServiceCondition = computed(() => {
      return `+$${isOnlineServiceValue.value}/${valueSufix.value}`;
    });

    const largerStorageCondition = computed(() => {
      return `+$${isLargerStorageValue.value}/${valueSufix.value}`;
    });

    const customizableProfileCondition = computed(() => {
      return `+$${isCustomizableProfileValue.value}/${valueSufix.value}`;
    });

    const totalPlan = computed(() => {
      const isOnlineServiceValueFinal = step3.value.isOnlineService.isActive
        ? isOnlineServiceValue.value
        : 0;
      const isLargerStorageValueFinal = step3.value.isLargerStorage.isActive
        ? isLargerStorageValue.value
        : 0;
      const isCustomizableProfileValueFinal = step3.value.isCustomizableProfile
        .isActive
        ? isCustomizableProfileValue.value
        : 0;

      const somaTotal =
        step2.value.value +
        isOnlineServiceValueFinal +
        isLargerStorageValueFinal +
        isCustomizableProfileValueFinal;

      return `+$${somaTotal}/${valueSufix.value}`;
    });

    const stepTo = () => {
      emit("stepTo", 2);
    };

    return {
      step2,
      step3,
      isOnlineServiceValue,
      isLargerStorageValue,
      isCustomizableProfileValue,
      valueSufix,
      onlineServiceCondition,
      largerStorageCondition,
      customizableProfileCondition,
      totalPlan,
      stepTo,
    };
  },
});

// export default defineComponent({
//   name: "IndexPage",
//   computed: {
//     ...mapState("Step", ["step1", "step2", "step3"]),
//     isOnlineServiceValue() {
//       return this.step2.planType === "Monthly"
//         ? this.step3.isOnlineService.monthlyValue
//         : this.step3.isOnlineService.yearlyValue;
//     },
//     isLargerStorageValue() {
//       return this.step2.planType === "Monthly"
//         ? this.step3.isLargerStorage.monthlyValue
//         : this.step3.isLargerStorage.yearlyValue;
//     },
//     isCustomizableProfileValue() {
//       return this.step2.planType === "Monthly"
//         ? this.step3.isCustomizableProfile.monthlyValue
//         : this.step3.isCustomizableProfile.yearlyValue;
//     },
//     valueSufix() {
//       return this.step2.planType === "Monthly" ? "mo" : "yr";
//     },
//     onlineServiceCondition() {
//       return `+$${this.isOnlineServiceValue}/${this.valueSufix}`;
//     },
//     largerStorageCondition() {
//       return `+$${this.isLargerStorageValue}/${this.valueSufix}`;
//     },
//     customizableProfileCondition() {
//       return `+$${this.isCustomizableProfileValue}/${this.valueSufix}`;
//     },
//     totalPlan() {
//       const isOnlineServiceValue = this.step3.isOnlineService.isActive
//         ? this.isOnlineServiceValue
//         : 0;
//       const isLargerStorageValue = this.step3.isLargerStorage.isActive
//         ? this.isLargerStorageValue
//         : 0;
//       const isCustomizableProfileValue = this.step3.isCustomizableProfile
//         .isActive
//         ? this.isCustomizableProfileValue
//         : 0;

//       return `+$${
//         this.step2.value +
//         isOnlineServiceValue +
//         isLargerStorageValue +
//         isCustomizableProfileValue
//       }/${this.valueSufix}`;
//     },
//   },
//   methods: {
//     stepTo() {
//       this.$emit("stepTo", 2);
//     },
//   },
// });
</script>

<style></style>
