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
    <div class="flex flex-center row q-gutter-y-md">
      <q-card
        :class="
          'col-12 ' + (isOnlineService.isActive === true ? 'selected-on' : '')
        "
      >
        <q-card-section horizontal>
          <q-card-section class="q-pa-md self-center">
            <q-checkbox v-model="isOnlineService.isActive" />
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
          'col-12 ' + (isLargerStorage.isActive === true ? 'selected-on' : '')
        "
      >
        <q-card-section horizontal>
          <q-card-section class="q-pa-md self-center">
            <q-checkbox v-model="isLargerStorage.isActive" />
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
          'col-12 ' +
          (isCustomizableProfile.isActive === true ? 'selected-on' : '')
        "
      >
        <q-card-section horizontal>
          <q-card-section class="q-pa-md self-center">
            <q-checkbox v-model="isCustomizableProfile.isActive" />
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
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Step1Info",
  setup() {
    const store = useStore();

    const step2 = computed(() => {
      return store.getters["Step/step2"];
    });

    const planType = computed(() => {
      return step2.value.planType;
    });

    const isOnlineService = computed({
      get() {
        return store.getters["Step/step3isOnlineService"];
      },
      set(value) {
        const objValue = { value, prop: "isOnlineService" };
        store.dispatch("Step/setStep3", objValue);
      },
    });

    const isLargerStorage = computed({
      get() {
        return store.getters["Step/step3isLargerStorage"];
      },
      set(value) {
        const objValue = { value, prop: "isLargerStorage" };
        store.dispatch("Step/setStep3", objValue);
      },
    });

    const isCustomizableProfile = computed({
      get() {
        return store.getters["Step/step3isCustomizableProfile"];
      },
      set(value) {
        const objValue = { value, prop: "isCustomizableProfile" };
        store.dispatch("Step/setStep3", objValue);
      },
    });

    return {
      step2,
      planType,
      isOnlineService,
      isLargerStorage,
      isCustomizableProfile,
    };
  },
});
</script>

<style></style>
