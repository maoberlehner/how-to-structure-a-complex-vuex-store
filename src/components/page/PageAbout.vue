<template>
  <div :class="$options.name">
    <h1>About</h1>

    <p>
      This is an example project for the following article:
      <a href="https://markus.oberlehner.net/blog/how-to-structure-a-complex-vuex-store/">
        How to Structure a Complex Vuex Store
      </a>
    </p>

    <p>
      If you want to support me, you can
      <a href="http://twitter.com/maoberlehner">follow me on Twitter</a> or
      <a href="https://github.com/maoberlehner/how-to-structure-a-complex-vuex-store/stargazers">
        Star this project on GitHub
      </a>.
    </p>
  </div>
</template>

<script>
export default {
  name: `PageAbout`,
};
</script>
