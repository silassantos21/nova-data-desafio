<template>
  <div class="q-pa-md">
    <div class="q-pb-xl">
      <span
        class="text-h4 text-bold text-weight-medium text-bold text-indigo-10"
        >Pick add-ons</span
      ><br />
      <span class="text-subtitle2 text-weight-medium text-grey-9"
        >Add-ons help enhace your gaming experience.</span
      >
    </div>
    <div class="flex flex-center row justify-around">
      <!-- <template v-for="(plan, index) in plans" :key="index">
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
      </template> -->
      <q-card
        :class="'col-12 ' + (isOnlineService === true ? 'selected-on' : '')"
      >
        <q-card-section horizontal>
          <q-card-section class="q-pa-md self-center">
            <q-checkbox v-model="isOnlineService" />
          </q-card-section>
          <q-card-section>
            <div class="text-indigo-10 text-subtitle1 text-bold">
              Online service
            </div>
            <div caption class="text-grey-9">Access to multiplayer games</div>
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
      </q-card>
      <q-space />
      <q-card
        :class="
          'col-12 q-my-md ' + (isLargerStorage === true ? 'selected-on' : '')
        "
      >
        <q-card-section horizontal>
          <q-card-section class="q-pa-md self-center">
            <q-checkbox v-model="isLargerStorage" />
          </q-card-section>
          <q-card-section>
            <div class="text-indigo-10 text-subtitle1 text-bold">
              Larger storage
            </div>
            <div caption class="text-grey-9">Extra 1TB of cloud save</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-indigo-10 text-bold"
            >
              +$2/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-indigo-10 text-bold"
            >
              +$20/yr
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card
        :class="
          'col-12 ' + (isCustomizableProfile === true ? 'selected-on' : '')
        "
      >
        <q-card-section horizontal>
          <q-card-section class="q-pa-md self-center">
            <q-checkbox v-model="isCustomizableProfile" />
          </q-card-section>
          <q-card-section>
            <div class="text-indigo-10 text-subtitle1 text-bold">
              Customizable profile
            </div>
            <div caption class="text-grey-9">Custom theme on your profile</div>
          </q-card-section>
          <q-card-section class="flex self-center margin-left-auto">
            <div
              v-if="planType === 'Monthly'"
              caption
              class="text-indigo-10 text-bold"
            >
              +$2/mo
            </div>
            <div
              v-if="planType === 'Yearly'"
              caption
              class="text-indigo-10 text-bold"
            >
              +$20/yr
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
    <!-- <div class="q-mt-lg">
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
    </div> -->
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
      isOnlineService: ref(false),
      isLargerStorage: ref(false),
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
});
</script>

<style></style>
