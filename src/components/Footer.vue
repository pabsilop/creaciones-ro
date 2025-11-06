<template>
  <footer class="mt-12 border-t pt-6 text-gray-700">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-center md:text-left">
        <p class="font-semibold">Creaciones SRO</p>
        <p class="text-sm">Hecho a mano con amor 💕</p>
      </div>
      <div>
        <a class="text-sm mr-3" href="https://www.instagram.com/creacionessro_" target="_blank">Instagram</a>
        <a class="text-sm" href="mailto:garrotenoguerorocio@gmail.com">Email</a>
      </div>
    </div>
    <p class="text-center text-xs text-gray-500 mt-4">© {{ year }} Creaciones SRO</p>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
