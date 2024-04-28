<template>
  <h1>Hello World</h1>
  <nav>
    <a href="/.auth/login/github?post_login_redirect_uri=https://yellow-bush-0f7a49603.5.azurestaticapps.net/success">Login via GitHub</a>
    <a href="/.auth/login/aad?post_login_redirect_uri=https://yellow-bush-0f7a49603.5.azurestaticapps.net/success">Login via Microsoft Entra ID</a>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
