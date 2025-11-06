<template>
  <header class="flex items-center justify-between py-4 px-2 max-w-6xl mx-auto">
    <div class="flex items-center gap-3">
      <img src="/logo.png" alt="Creaciones SRO" class="w-12 h-12 rounded-full object-cover" />
      <div>
        <h1 class="text-xl header-title">Creaciones SRO</h1>
        <p class="text-xs text-gray-600">Hecho con amor</p>
      </div>
    </div>

    <!-- Desktop nav -->
    <nav class="hidden md:flex items-center gap-6">
      <router-link to="/" class="hover:underline">Inicio</router-link>
      <router-link to="/catalogo" class="hover:underline">Catálogo</router-link>
      <router-link to="/sobre-mi" class="hover:underline">Sobre mí</router-link>
      <router-link to="/contacto" class="hover:underline">Contacto</router-link>
    </nav>

    <!-- Mobile hamburger -->
    <div class="md:hidden">
      <button @click="open = !open" aria-label="Abrir menú" class="p-2 rounded bg-white shadow">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div v-if="open" class="absolute top-20 right-4 left-4 bg-white rounded-lg p-4 shadow md:hidden">
        <nav class="flex flex-col gap-3">
          <router-link @click.native="open=false" to="/">Inicio</router-link>
          <router-link @click.native="open=false" to="/catalogo">Catálogo</router-link>
          <router-link @click.native="open=false" to="/sobre-mi">Sobre mí</router-link>
          <router-link @click.native="open=false" to="/contacto">Contacto</router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity .2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
