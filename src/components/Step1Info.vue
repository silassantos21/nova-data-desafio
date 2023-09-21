<template>
  <div class="q-pa-md">
    <div class="q-pb-md">
      <span
        class="text-h4 text-bold text-weight-medium text-bold text-indigo-10"
        >Personal Info</span
      ><br />
      <span class="text-subtitle2 text-weight-medium text-grey-9"
        >Please, provide your name, email address and phone number.</span
      >
    </div>
    <q-form
      ref="formStep1"
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-y-sm"
    >
      <div class="row flex flex-left float-center text-left">
        <span class="text-subtitle1 text-bold text-indigo-10"> Name </span>
      </div>
      <q-input
        outlined
        v-model="name"
        lazy-rules
        placeholder="Ex: teste"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div class="row flex flex-left float-center text-left">
        <span class="text-subtitle1 text-bold text-indigo-10">
          Email Address
        </span>
      </div>
      <q-input
        outlined
        v-model="email"
        lazy-rules
        placeholder="Ex: teste@teste.com"
        :rules="[(val) => verificaEmailValidacoes(val)]"
      />
      <div class="row flex flex-left float-center text-left">
        <span class="text-subtitle1 text-bold text-indigo-10">
          Phone Number
        </span>
      </div>
      <q-input
        outlined
        v-model="phoneNumber"
        mask="(##) #####-####"
        unmasked-value
        lazy-rules
        placeholder="Ex: (99)9 9999-9999"
        :rules="[(val) => validarCelular(val.toString())]"
      >
      </q-input>
    </q-form>
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

    const formStep1 = ref(null);

    const name = computed({
      get() {
        return store.getters["Step/step1Name"];
      },
      set(value) {
        const objValue = { value, prop: "name" };
        store.dispatch("Step/setStep1", objValue);
      },
    });

    const email = computed({
      get() {
        return store.getters["Step/step1Email"];
      },
      set(value) {
        const objValue = { value, prop: "email" };
        store.dispatch("Step/setStep1", objValue);
      },
    });

    const phoneNumber = computed({
      get() {
        return store.getters["Step/step1PhoneNumber"];
      },
      set(value) {
        const objValue = { value, prop: "phoneNumber" };
        store.dispatch("Step/setStep1", objValue);
      },
    });

    const submitForm = async () => {
      const response = await formStep1.value.validate();
      if (response) {
        emit("stepTo", 2);
      }
    };

    const verificaEmailValidacoes = (email) => {
      if (!validaEmail(email)) {
        return "Insira um e-mail válido";
      }
      return true;
    };

    const validaEmail = (email) => {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

    const validarCelular = (celular) => {
      if (!celular || celular.length !== 11) {
        return "Esse campo deve possuir 11 dígitos";
      }
      if (
        celular.substring(0, 2) === "00" ||
        celular.substring(0, 2) === "01" ||
        celular.substring(0, 2) === "02" ||
        celular.substring(0, 2) === "03" ||
        celular.substring(0, 2) === "04" ||
        celular.substring(0, 2) === "05" ||
        celular.substring(0, 2) === "06" ||
        celular.substring(0, 2) === "07" ||
        celular.substring(0, 2) === "08" ||
        celular.substring(0, 2) === "09" ||
        celular.substring(0, 2) === "10" ||
        celular.substring(0, 2) === "20" ||
        celular.substring(0, 2) === "23" ||
        celular.substring(0, 2) === "25" ||
        celular.substring(0, 2) === "26" ||
        celular.substring(0, 2) === "29" ||
        celular.substring(0, 2) === "30" ||
        celular.substring(0, 2) === "36" ||
        celular.substring(0, 2) === "39" ||
        celular.substring(0, 2) === "40" ||
        celular.substring(0, 2) === "50" ||
        celular.substring(0, 2) === "52" ||
        celular.substring(0, 2) === "56" ||
        celular.substring(0, 2) === "57" ||
        celular.substring(0, 2) === "58" ||
        celular.substring(0, 2) === "59" ||
        celular.substring(0, 2) === "60" ||
        celular.substring(0, 2) === "70" ||
        celular.substring(0, 2) === "72" ||
        celular.substring(0, 2) === "76" ||
        celular.substring(0, 2) === "78" ||
        celular.substring(0, 2) === "80" ||
        celular.substring(0, 2) === "90"
      ) {
        return "Insira um DDD válido.";
      }
      if (celular.substring(2, 3) !== "9") {
        return "Depois do DDD, o número de celular deve começar com 9";
      }
      return true;
    };

    return {
      formStep1,
      name,
      email,
      phoneNumber,
      submitForm,
      verificaEmailValidacoes,
      validaEmail,
      validarCelular,
    };
  },
});

/*export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      form: ref({
        name: "",
        email: "",
        phoneNumber: "",
      }),
    };
  },
  computed: {
    ...mapState("Step", ["step1", "step2", "step3"]),
    name: {
      get() {
        return this.$store.getters["Step/step1Name"];
      },
      set(value) {
        const objValue = { value, prop: "name" };
        this.$store.dispatch("Step/setStep1", objValue);
      },
    },
    email: {
      get() {
        return this.$store.getters["Step/step1Email"];
      },
      set(value) {
        const objValue = { value, prop: "email" };
        this.$store.dispatch("Step/setStep1", objValue);
      },
    },
    phoneNumber: {
      get() {
        return this.$store.getters["Step/step1PhoneNumber"];
      },
      set(value) {
        const objValue = { value, prop: "phoneNumber" };
        this.$store.dispatch("Step/setStep1", objValue);
      },
    },
  },
  methods: {
    ...mapActions("Step", ["setStep1"]),
    async submitForm() {
      const response = await this.$refs.formStep1.validate();
      if (response) {
        this.$emit("stepTo", 2);
      }
    },
    verificaEmailValidacoes(email) {
      if (!this.validaEmail(email)) {
        return "Insira um e-mail válido";
      }
      return true;
    },
    validaEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validarCelular(celular) {
      if (!celular || celular.length !== 11) {
        return "Esse campo deve possuir 11 dígitos";
      }
      if (
        celular.substring(0, 2) === "00" ||
        celular.substring(0, 2) === "01" ||
        celular.substring(0, 2) === "02" ||
        celular.substring(0, 2) === "03" ||
        celular.substring(0, 2) === "04" ||
        celular.substring(0, 2) === "05" ||
        celular.substring(0, 2) === "06" ||
        celular.substring(0, 2) === "07" ||
        celular.substring(0, 2) === "08" ||
        celular.substring(0, 2) === "09" ||
        celular.substring(0, 2) === "10" ||
        celular.substring(0, 2) === "20" ||
        celular.substring(0, 2) === "23" ||
        celular.substring(0, 2) === "25" ||
        celular.substring(0, 2) === "26" ||
        celular.substring(0, 2) === "29" ||
        celular.substring(0, 2) === "30" ||
        celular.substring(0, 2) === "36" ||
        celular.substring(0, 2) === "39" ||
        celular.substring(0, 2) === "40" ||
        celular.substring(0, 2) === "50" ||
        celular.substring(0, 2) === "52" ||
        celular.substring(0, 2) === "56" ||
        celular.substring(0, 2) === "57" ||
        celular.substring(0, 2) === "58" ||
        celular.substring(0, 2) === "59" ||
        celular.substring(0, 2) === "60" ||
        celular.substring(0, 2) === "70" ||
        celular.substring(0, 2) === "72" ||
        celular.substring(0, 2) === "76" ||
        celular.substring(0, 2) === "78" ||
        celular.substring(0, 2) === "80" ||
        celular.substring(0, 2) === "90"
      ) {
        return "Insira um DDD válido.";
      }
      if (celular.substring(2, 3) !== "9") {
        return "Depois do DDD, o número de celular deve começar com 9";
      }
      return true;
    },
  },
});
*/
</script>

<style></style>
