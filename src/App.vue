<template>
  <div id="app" class="app">
    <nav class="nav">
      <router-link class="nav-item" :to="{ name: 'customer' }">
        New Customer
      </router-link> |
      <router-link class="nav-item" :to="{ name: 'shipping-address' }">
        New Shipping Address
      </router-link>
    </nav>
    <router-view></router-view>
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
  width: 100%;
  padding: 0.5em;
}

button {
  padding: 0.75em;
  cursor: pointer;
}

.app {
  max-width: 42em;
  margin: 0 auto;
  padding: 1em 0.5em;
}

.nav {
  padding-bottom: 0.75em;
  border-bottom: 1px solid;
}

.nav-item,
.nav-item:visited {
  color: inherit;
}

.nav-item {
  text-decoration: none;
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
  margin-bottom: 0.25em;
  display: block;
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
