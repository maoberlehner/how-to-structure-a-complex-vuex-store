<template>
  <div :class="$options.name">
    <h1>New Shipping Address</h1>

    <p
      v-if="success"
      class="success">
      SUCCESS!
    </p>
    <p
      v-if="error"
      class="error">
      ERROR: {{ error }}
    </p>

    <template v-if="!success">
      <div class="form-sections">
        <section class="form-section">
          <div class="form-element">
            <label
              for="email"
              class="form-label">E-Mail:</label>
            <input
              id="email"
              v-model="email"
              type="email">
          </div>
          <div class="form-element">
            <label
              for="phone"
              class="form-label">Phone:</label>
            <input
              id="phone"
              v-model="phone">
          </div>
        </section>

        <section class="form-section">
          <div class="form-element">
            <label
              for="zip"
              class="form-label">ZIP:</label>
            <input
              id="zip"
              v-model="zip">
          </div>
          <div class="form-element">
            <label
              for="town"
              class="form-label">Town:</label>
            <input
              id="town"
              v-model="town">
          </div>
          <div class="form-element">
            <label
              for="street"
              class="form-label">Street:</label>
            <input
              id="street"
              v-model="street">
          </div>
        </section>
      </div>

      <button
        class="form-button"
        @click="submit">Submit</button>
    </template>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import { SUBMIT } from '../../store/action-types';

import store from '../../store';
import {
  shippingAddress,
  mapAddressFields,
  mapContactFields,
} from '../../store/modules/shipping-address';

// We're dynamically registering the
// `shippingAddress` store module. This
// has the benefit of only loading this
// module, if it's actually needed.
// Before registering the module, we're
// checking if it's already registered
// which can happen in combination with
// webpacks hot reloading.
if (!store.state.shippingAddress) store.registerModule(`shippingAddress`, shippingAddress);

const { mapActions, mapState } = createNamespacedHelpers(`shippingAddress`);

export default {
  name: `PageShippingAddress`,
  computed: {
    ...mapState([`error`, `success`]),
    ...mapContactFields([`rows[0].email`, `rows[0].phone`]),
    ...mapAddressFields([`rows[0].zip`, `rows[0].town`, `rows[0].street`]),
  },
  methods: {
    ...mapActions({
      submit: SUBMIT,
    }),
  },
};
</script>
