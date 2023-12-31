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
            <div caption class="text-grey-9">
              {{ `$${plan.value}/${planType === "Monthly" ? "mo" : "yr"}` }}
            </div>
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
import { defineComponent, ref, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Step1Info",
  setup() {
    const store = useStore();

    const plans = ref([
      {
        name: "Arcade",
        value: 9,
        freeMonths: null,
        planType: "Monthly",
      },
      {
        name: "Advanced",
        value: 12,
        freeMonths: null,
        planType: "Monthly",
      },
      {
        name: "Pro",
        value: 15,
        freeMonths: null,
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
    ]);

    const planType = ref("Monthly");
    const selectedPlan = ref("");
    const selectedIndex = ref(null);
    const isStateChange = ref(false);

    const formStep1 = ref(null);

    onMounted(() => {
      setStatePlan();
    });

    const step2 = computed(() => {
      return store.getters["Step/step2"];
    });

    const selectedPlanObject = computed(() => {
      const emptyPlanObject = {
        name: "",
        value: 0,
        freeMonths: 0,
        planType: "",
      };
      return plans.value[selectedIndex.value] ?? emptyPlanObject;
    });

    watch(planType, () => {
      if (!isStateChange.value) {
        selectedPlan.value = "";
        selectedIndex.value = null;
      } else {
        isStateChange.value = false;
      }
    });

    watch(selectedPlanObject, (newValue) => {
      store.dispatch("Step/setStep2", newValue);
    });

    const setStatePlan = () => {
      if (step2.value.name) {
        isStateChange.value = true;
        planType.value = step2.value.planType;
        const selectedIndex = plans.value.findIndex((item) => {
          return item.name === step2.value.name;
        });
        setPlan(step2.value.name, selectedIndex);
        isStateChange.value = false;
      }
    };

    const setPlan = (plan, index) => {
      selectedPlan.value = plan;
      selectedIndex.value = index;
    };

    return {
      plans,
      planType,
      selectedPlan,
      selectedIndex,
      isStateChange,
      formStep1,
      step2,
      selectedPlanObject,
      setStatePlan,
      setPlan,
    };
  },
});
</script>

<style></style>
