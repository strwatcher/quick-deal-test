<script setup lang="ts"></script>

<template>
  <main class="home-view">
    <RouterLink to="/tasks" class="link">Задачи</RouterLink>
  </main>
</template>

<style scoped lang="scss">
.home-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link {
  font-size: 3em;
  text-decoration: none;
}
</style>
