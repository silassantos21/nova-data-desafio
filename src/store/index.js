import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import Step from "./modules/step";

export default createStore({
  plugins: [createPersistedState()],
  modules: {
    Step,
  },
});
