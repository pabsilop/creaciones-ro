<template>
  <section class="space-y-6">
    <div class="bg-rosa-100 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
      <div class="flex-1">
        <h2 class="text-3xl md:text-4xl header-title">Hecho con amor, personalizado para ti</h2>
        <p class="mt-3 text-sm md:text-base">Creaciones SRO crea regalos únicos y personalizados para bebés y niños. Todo hecho a mano con cariño.</p>
        <router-link to="/catalogo" class="inline-block mt-4 btn-primary">Ver catálogo</router-link>
      </div>
      <div class="w-full md:w-1/3">
        <img src="/uploads/sample1.jpg" alt="destacado" class="rounded-lg object-cover w-full h-48 md:h-56" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="card">
        <h3 class="font-semibold">Productos recientes</h3>
        <p class="mt-2 text-sm text-gray-600">Actualizaciones frecuentes con nuevas creaciones.</p>
      </div>
      <div class="card">
        <h3 class="font-semibold">Personalización</h3>
        <p class="mt-2 text-sm text-gray-600">Añade nombres, fechas o detalles especiales.</p>
      </div>
    </div>
  </section>
</template>
