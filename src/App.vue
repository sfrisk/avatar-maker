<template>
  <div class="site">
    <a
      href="https://github.com/sfrisk/avatar-maker"
      class="github-corner"
      aria-label="View source on GitHub"
      ><svg
        width="80"
        height="80"
        viewBox="0 0 250 250"
        style="
          fill: #151513;
          color: #fff;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        "
        aria-hidden="true"
      >
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path></svg
    ></a>
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

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
