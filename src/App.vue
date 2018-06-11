<template>
  <div
    id="app"
    class="app"
  >
    <nav class="nav">
      <router-link
        :to="{ name: `customer` }"
        class="nav-item"
      >
        New Customer
      </router-link> |
      <router-link
        :to="{ name: `shipping-address` }"
        class="nav-item"
      >
        New Shipping Address
      </router-link> |
      <router-link
        :to="{ name: `about` }"
        class="nav-item"
      >
        About
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: `App`,
};
</script>

<style>
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

input {
  padding: 0.5em;
  width: 100%;
}

button {
  padding: 0.75em;
  cursor: pointer;
}

.app {
  margin: 0 auto;
  padding: 1em 0.5em;
  max-width: 42em;
}

.nav {
  padding-bottom: 0.75em;
  border-bottom: 1px solid;
}

.nav-item {
  text-decoration: none;
}

.nav-item,
.nav-item:visited {
  color: inherit;
}

.nav-item:hover,
.nav-item:focus {
  text-decoration: underline;
}

.form-section {
  padding: 1em;
  border: 1px solid #efefef;
}

.form-section:not(:first-child) {
  margin-top: 1em;
}

.form-repeatable:not(:first-child) {
  margin-top: 1em;
  padding-top: 1em;
  border-top: 1px solid #efefef;
}

.form-element:not(:first-child) {
  margin-top: 0.5em;
}

.form-label {
  display: block;
  margin-bottom: 0.25em;
}

.form-button {
  margin-top: 1em;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>
