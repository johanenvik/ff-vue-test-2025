import { createStore } from 'vuex'

import userModule from './user';
import countryModule from './country';
import professionModule from './profession';

const store = createStore({
  modules: {
    userModule,
    countryModule,
    professionModule,
  },
})

export default store