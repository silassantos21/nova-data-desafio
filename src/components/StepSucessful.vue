<template>
  <div class="q-pa-md sucessful-layout">
    <div class="flex flex-center row">
      <q-card class="my-card-sucessful" flat>
        <q-card-section>
          <q-avatar size="80px">
            <img src="../assets/images/icon-thank-you.svg" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="text-h4 text-indigo-10 text-bold q-pb-sm">Thank you!</div>
          <div caption class="text-subtitle1 text-grey-9 text-justify">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need suport, please feel free to email us
            at support@loremgaming.com
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "StepSucessful",
});
</script>

<style></style>
