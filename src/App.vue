<template>
  <div class="app">
    <Sidebar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
  import Sidebar from "./components/Sidebar"
</script>

<style lang="scss">
  :root {
    --primary: #ffffff;
    --grey: #ffffff;
    --dark: #1a1a1b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 230px;
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  .app {
    display: flex;
    min-height: 100dvh;

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.2s  ease-out;
    }

    main {
      flex: 1 1 0;
      padding: 2rem;
      will-change: transform, opacity;

      @media (max-width: 768px) {
        padding-left: 6rem;
      }
    }

  }
</style>
