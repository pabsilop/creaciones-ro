<template>
  <article class="card flex flex-col">
    <div class="w-full h-48 overflow-hidden rounded-lg">
      <img :src="product.imagen" :alt="product.nombre" class="object-cover w-full h-full" />
    </div>
    <div class="mt-3 flex-1">
      <h3 class="font-semibold text-lg">{{ product.nombre }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ product.descripcion }}</p>
    </div>
    <div class="mt-3 flex items-center justify-between">
      <span class="text-xs px-2 py-1 rounded bg-rosa-100">{{ product.categoria }}</span>
      <a :href="`mailto:garrotenoguerorocio@gmail.com?subject=Info%20${encodeURIComponent(product.nombre)}`" class="text-sm underline">Contactar</a>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ product: { nombre: string; descripcion: string; imagen: string; categoria?: string } }>()
</script>
