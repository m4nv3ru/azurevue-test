<template>
    <div>
        <h1>Success</h1>
        <p>You have successfully authenticated.</p>
        <div>
            <button @click="() => callApi()">Call API</button>
        </div>
        <a href="/.auth/logout">Log out</a>
    </div>
</template>

<script setup lang="ts">

const callApi = () => {
    console.log('Calling API');
    fetch('/api/httpTrigger1')
        .then(response => console.log(response))
        .catch(error => console.error(error));
};

</script>