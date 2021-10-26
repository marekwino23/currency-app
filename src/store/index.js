import { createStore } from "vuex";

export default createStore({
  state: {
    usd: null,
    eur: null,
    gpb: null
  },
  actions:{
    addCurrency({state}, {currency,rate}) {
                    state[currency.toLowerCase()] = rate;
                    return state;
      },
  },
});