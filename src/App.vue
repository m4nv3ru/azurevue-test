<template>
  <div>Hello {{ value }}</div>
  <a href="/.auth/login/github?post_login_redirect_uri=https://webhook.site/5cdf1105-34cf-4af3-9c64-04d16ebcf921">Login via GitHub</a>
  <a href="/.auth/login/aad?post_login_redirect_uri=https://webhook.site/5cdf1105-34cf-4af3-9c64-04d16ebcf921">Login via Microsoft Entra ID</a>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "World"
    };
  }
};
</script>
