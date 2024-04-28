<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <div>Hello World</div>
      <nav>
        <ul>
          <li>
            <a href="/.auth/login/github?post_login_redirect_uri=https://yellow-bush-0f7a49603.5.azurestaticapps.net/success">Login GitHub</a>
          </li>
          <li>
            <a href="/.auth/login/aad?post_login_redirect_uri=https://yellow-bush-0f7a49603.5.azurestaticapps.net/success">Login AAD</a>
          </li>
        </ul>       
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
