import { getField, updateField } from 'vuex-map-fields';

import { ADD_ROW } from '../../mutation-types';
import { Contact } from '../../../models/Contact';

const mutations = {
  updateField,
  [ADD_ROW](state) {
    // To enable multi-row form handling
    // we make it possible to add new rows.
    state.rows.push(new Contact());
  },
};

const getters = {
  getField,
};

// The state must return a function
// to make the module reusable.
// See: https://vuex.vuejs.org/en/modules.html#module-reuse
const state = () => ({
  // Pre-fill one row with an
  // empty `Contact` model.
  rows: [new Contact()],
});

export default {
  // We're using namespacing
  // in all of our modules.
  namespaced: true,
  mutations,
  getters,
  state,
};
