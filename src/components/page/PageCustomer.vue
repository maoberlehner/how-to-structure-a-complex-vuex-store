<template>
  <div :class="$options.name">
    <h1>New Customer</h1>

    <p class="success" v-if="success">
      SUCCESS!
    </p>
    <p class="error" v-if="error">
      ERROR: {{ error }}
    </p>

    <template v-if="!success">
      <div class="form-sections">
        <section class="form-section">
          <div class="form-element">
            <label for="firstName" class="form-label">First name:</label>
            <input id="firstName" v-model="firstName">
          </div>
          <div class="form-element">
            <label for="lastName" class="form-label">Last name:</label>
            <input id="lastName" v-model="lastName">
          </div>
        </section>

        <section class="form-section">
          <div class="form-repeatable" v-for="(contact, index) in contacts" :key="index">
            <div class="form-element">
              <label for="email" class="form-label">E-Mail:</label>
              <input id="email" type="email" v-model="contact.email">
            </div>
            <div class="form-element">
              <label for="phone" class="form-label">Phone:</label>
              <input id="phone" v-model="contact.phone">
            </div>
          </div>
          <button class="form-button" @click="addContact">Add contact</button>
        </section>

        <section class="form-section">
          <div class="form-element">
            <label for="zip" class="form-label">ZIP:</label>
            <input id="zip" v-model="zip">
          </div>
          <div class="form-element">
            <label for="town" class="form-label">Town:</label>
            <input id="town" v-model="town">
          </div>
          <div class="form-element">
            <label for="street" class="form-label">Street:</label>
            <input id="street" v-model="street">
          </div>
        </section>
      </div>

      <button class="form-button" @click="submit">Submit</button>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { SUBMIT } from '../../store/action-types';
import { ADD_ROW } from '../../store/mutation-types';

import store from '../../store';
import {
  customer,
  mapAddressFields,
  mapContactMultiRowFields,
  mapNameFields,
} from '../../store/modules/customer';

// We're dynamically registering the
// `customer` store module. This has
// the benefit of only loading this
// module, if it's actually needed.
// Before registering the module, we're
// checking if it's already registered
// which can happen in combination with
// webpacks hot reloading.
if (!store.state.customer) store.registerModule(`customer`, customer);

const {
  mapActions: mapCustomerActions,
  mapState: mapCustomerState,
} = createNamespacedHelpers(`customer`);
const {
  mapMutations: mapContactMutations,
} = createNamespacedHelpers(`customer/contact`);

export default {
  name: `PageCustomer`,
  computed: {
    // Here we're wiring everything up.
    ...mapCustomerState([`error`, `success`]),
    // You can read more about mapping field
    // values in two of my previous articles.
    // https://markus.oberlehner.net/blog/form-fields-two-way-data-binding-and-vuex/
    // https://markus.oberlehner.net/blog/how-to-handle-multi-row-forms-with-vue-vuex-and-vuex-map-fields/
    ...mapNameFields([`rows[0].firstName`, `rows[0].lastName`]),
    ...mapContactMultiRowFields({ contacts: `rows` }),
    ...mapAddressFields([`rows[0].zip`, `rows[0].town`, `rows[0].street`]),
  },
  methods: {
    ...mapContactMutations({
      addContact: ADD_ROW,
    }),
    ...mapCustomerActions({
      submit: SUBMIT,
    }),
  },
};
</script>
