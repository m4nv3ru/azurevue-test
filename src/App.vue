<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <div>Hello World</div>
      <nav>
        <RouterLink to="/success">Home</RouterLink>
        <a href="/.auth/login/github?post_login_redirect_uri=https://yellow-bush-0f7a49603.5.azurestaticapps.net/success">Login GitHub</a>
        <a href="/.auth/login/github?post_login_redirect_uri=https://yellow-bush-0f7a49603.5.azurestaticapps.net/success">Login AAD</a>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
