import { getField, updateField } from 'vuex-map-fields';

import { Name } from '../../../models/Name';

const mutations = {
  updateField,
};

const getters = {
  getField,
};

const state = () => ({
  rows: [new Name()],
});

export default {
  namespaced: true,
  mutations,
  getters,
  state,
};
