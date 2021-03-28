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
      &copy; {{ new Date().getFullYear() }}
      <a href="https://sarahfrisk.com/" title="sarahfrisk.com">S Frisk</a> (the
      OG Dolphin Maker 1.0)
    </footer>
  </div>
</template>

<style lang="scss">
:root {
  --white: #f0e2f8;
  --black: #131314;
  --primary001: #bea4d2;
  --primary002: #7165b2;
  --primary003: #423873;
  --secondary001: #bdccff;
  --secondary002: #8c9de2;

  --site__font: "Roboto Mono", monospace;
  --site__font-alt: "Orbitron", sans-serif;
  --site__bg: var(--white);
  --site__color: var(--black);
  --site__link: var(--primary003);
  --site__link--active: var(--primary002);
  --site__header: var(--primary003);

  --site--footer__bg: var(--primary002);
  --site-footer__color: var(--white);
  --site-footer__link: var(--secondary001);
  --site-footer__link--active: var(--secondary002);

  --button__bg: var(--primary002);
  --button__border: 2px solid var(--primary002);
  --button__color: var(--white);
  --button__border--hover: 2px solid var(--primary003);
  --button__bg--hover: var(--primary003);
  --button__color--hover: var(--white);

  @media (prefers-color-scheme: dark) {
    --white: #b7c0dd;
    --black: #092147;
    --primary003: #d280e0;
    --primary002: #ac62b9;
    --primary001: #63345e;
    --secondary002: #628fb9;
    --secondary001: #0b468c;

    --site__font: "Roboto Mono", monospace;
    --site__font-alt: "Orbitron", sans-serif;
    --site__bg: var(--black);
    --site__color: var(--white);
    --site__link: var(--primary002);
    --site__link--active: var(--primary003);
    --site__header: var(--primary003);

    --site--footer__bg: var(--secondary001);
    --site-footer__color: var(--white);
    --site-footer__link: var(--primary003);
    --site-footer__link--active: var(--primary002);

    --button__bg: var(--black);
    --button__border: 3px solid var(--primary002);
    --button__color: var(--primary002);
    --button__border--hover: 3px solid var(--primary003);
    --button__color--hover: var(--primary003);
    --button__bg--hover: var(--black);
  }
}

$bp_xs: 400px;
$bp_sm: 550px;
$bp_md: 768px;
$bp_lg: 1100px;
$bp_xl: 1400px;
$bp_xxl: 2400px;

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
  background: var(--site__bg);
  color: var(--site__color);
  font-family: var(--site__font);
  min-height: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  max-width: 100%;
}

body {
  font-size: 1.2em;
  line-height: 1.75;
  @media (min-width: $bp_md) {
    font-size: 1.5em;
  }
}

p {
  margin: 0;
  padding: 0;
}

a {
  color: var(--site__link);
  &:hover,
  &:active {
    color: var(--site__link--active);
  }
}

strong {
  font-weight: bold;
}

h1,
h2,
h3 {
  font-family: var(--site__font-alt);
  font-weight: normal;
  color: var(--site__header);
  text-align: center;
}
h1 {
  margin: 0 0 1rem 0;
  padding: 0;
}

h2 {
  font-size: 1.25rem;
}

#app {
  height: 100%;
}
.align-right {
  text-align: right;
}

.site {
  min-height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 0 auto 60px;
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
  text-align: center;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #7165b2;
  }
}
</style>
