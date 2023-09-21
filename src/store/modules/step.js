const Step = {
  namespaced: true,
  state: {
    step1: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    step2: {
      name: "",
      value: 0,
      freeMonths: null,
      planType: "",
    },
    step3: {
      isOnlineService: {
        isActive: false,
        monthlyValue: 1,
        yearlyValue: 10,
      },
      isLargerStorage: {
        isActive: false,
        monthlyValue: 2,
        yearlyValue: 20,
      },
      isCustomizableProfile: {
        isActive: false,
        monthlyValue: 2,
        yearlyValue: 20,
      },
    },
  },
  getters: {
    setStep1: (state) => {
      return state.step1;
    },
    step1Name: (state) => {
      return state.step1.name;
    },
    step1Email: (state) => {
      return state.step1.email;
    },
    step1PhoneNumber: (state) => {
      return state.step1.phoneNumber;
    },
    step2: (state) => {
      return state.step2;
    },
    step3: (state) => {
      return state.step3;
    },
    step3isOnlineService: (state) => {
      return state.step3.isOnlineService;
    },
    step3isLargerStorage: (state) => {
      return state.step3.isLargerStorage;
    },
    step3isCustomizableProfile: (state) => {
      return state.step3.isCustomizableProfile;
    },
  },
  mutations: {
    SET_STEP_1(state, step1) {
      state.step1[step1.prop] = step1.value;
    },
    SET_STEP_2(state, step2) {
      state.step2 = {
        name: step2.name,
        value: step2.value,
        freeMonths: step2.freeMonths,
        planType: step2.planType,
      };
    },
    SET_STEP_3(state, step3) {
      state.step3[step3.prop] = step3.value;
    },
    CLEAR_STEP_1(state) {
      state.step1 = {
        name: "",
        email: "",
        phoneNumber: "",
      };
    },
    CLEAR_STEP_2(state) {
      state.step2 = {
        name: "",
        value: 0,
        freeMonths: null,
        planType: "",
      };
    },
    CLEAR_STEP_3(state) {
      state.step3 = {
        isOnlineService: {
          isActive: false,
          monthlyValue: 1,
          yearlyValue: 10,
        },
        isLargerStorage: {
          isActive: false,
          monthlyValue: 2,
          yearlyValue: 20,
        },
        isCustomizableProfile: {
          isActive: false,
          monthlyValue: 2,
          yearlyValue: 20,
        },
      };
    },
    CLEAR_STEPS(state) {
      state.step1 = {
        name: "",
        email: "",
        phoneNumber: "",
      };
      state.step2 = {
        name: "",
        value: 0,
        freeMonths: null,
        planType: "",
      };
      state.step3 = {
        isOnlineService: {
          isActive: false,
          monthlyValue: 1,
          yearlyValue: 10,
        },
        isLargerStorage: {
          isActive: false,
          monthlyValue: 2,
          yearlyValue: 20,
        },
        isCustomizableProfile: {
          isActive: false,
          monthlyValue: 2,
          yearlyValue: 20,
        },
      };
    },
  },
  actions: {
    setStep1(context, step1) {
      context.commit("SET_STEP_1", step1);
    },
    setStep2(context, step2) {
      context.commit("SET_STEP_2", step2);
    },
    setStep3(context, step3) {
      context.commit("SET_STEP_3", step3);
    },
    clearStep1(context) {
      context.commit("CLEAR_STEP_1");
    },
    clearStep2(context) {
      context.commit("CLEAR_STEP_2");
    },
    clearStep3(context) {
      context.commit("CLEAR_STEP_3");
    },
    clearSteps(context) {
      context.commit("CLEAR_STEPS");
    },
  },
};

export default Step;
