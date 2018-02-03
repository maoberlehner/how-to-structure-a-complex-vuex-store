import { createHelpers } from 'vuex-map-fields';

import api from '../../utils/api';

import { createShippingAddress } from '../../models/ShippingAddress';
import { createRequest } from '../../models/Request';

import { SUBMIT } from '../action-types';
import { ERROR, SUCCESS } from '../mutation-types';

import address from './forms/address';
import contact from './forms/contact';

const actions = {
  async [SUBMIT]({ commit, state }) {
    try {
      const customerData = createShippingAddress({
        address: state.address.rows[0],
        contact: state.contact.rows[0],
      });
      const requestData = createRequest(customerData);

      await api(requestData);

      commit(SUCCESS);
    } catch (error) {
      commit(ERROR, error.message);
    }
  },
};

const mutations = {
  [ERROR](state, error) {
    // eslint-disable-next-line no-param-reassign
    state.error = error;
    // eslint-disable-next-line no-param-reassign
    state.success = false;
  },
  [SUCCESS](state) {
    // eslint-disable-next-line no-param-reassign
    state.error = false;
    // eslint-disable-next-line no-param-reassign
    state.success = true;
  },
};

const state = () => ({
  error: false,
  success: false,
});

const modules = {
  address,
  contact,
};

export const { mapFields: mapAddressFields } = createHelpers({
  getterType: `shippingAddress/address/getField`,
  mutationType: `shippingAddress/address/updateField`,
});

export const { mapFields: mapContactFields } = createHelpers({
  getterType: `shippingAddress/contact/getField`,
  mutationType: `shippingAddress/contact/updateField`,
});

export const shippingAddress = {
  namespaced: true,
  actions,
  mutations,
  state,
  modules,
};
