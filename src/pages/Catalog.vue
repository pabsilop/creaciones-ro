<template>
  <section>
    <h2 class="text-2xl header-title mb-4">Catálogo</h2>
    <div class="flex items-center justify-between mb-4">
      <div>
        <label class="text-sm mr-2">Categoría:</label>
        <select v-model="categoria" class="border rounded px-2 py-1">
          <option value="">Todas</option>
          <option value="Bebé">Bebé</option>
          <option value="Regalos">Regalos</option>
          <option value="Accesorios">Accesorios</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard v-for="p in filtered" :key="p.nombre" :product="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import productos from '@/content/sample-products.json'

const categoria = ref('')
const filtered = computed(() => {
  if (!categoria.value) return productos
  return productos.filter(p => p.categoria === categoria.value)
})
</script>
