<template>
  <div class="site">
    <header class="site__header" id="nav">
      <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/dolphin">Dolphin</router-link>
      </nav> -->
    </header>
    <router-view class="site__content" />
    <footer class="site__footer">
      &copy; {{ new Date().getFullYear() }} S Frisk
    </footer>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #efefef;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.site {
  min-height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 25px auto 25px;
}

.site__header {
  grid-area: header;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.site__content {
  grid-area: content;
}

.site__footer {
  grid-area: footer;
}
</style>
