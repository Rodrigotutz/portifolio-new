<template>
  <main class="home">
    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sequi modi possimus voluptas nesciunt iste, sit laudantium, debitis facilis similique dignissimos. Consectetur earum in laudantium deserunt!</h1>
    <span>
      {{ isDark ? "Dark" : "Light" }} Mode
    </span>
  </main>
</template>

<script setup>
const isDark = defineProps(['isDark'])

</script>
