<template>
  <section class="max-w-xl mx-auto">
    <h2 class="text-2xl header-title mb-4">Contacto</h2>
    <div class="card">
      <form name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contacto" />
        <p class="hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <div class="space-y-3">
          <label class="block">Nombre<input required name="nombre" class="w-full border rounded px-2 py-2" /></label>
          <label class="block">Email<input required type="email" name="email" class="w-full border rounded px-2 py-2" /></label>
          <label class="block">Mensaje<textarea required name="mensaje" class="w-full border rounded px-2 py-2 h-28"></textarea></label>
          <div class="flex flex-col sm:flex-row gap-2 mt-2">
            <button type="submit" class="btn-primary">Enviar</button>
            <a :href="whatsappLink" target="_blank" class="w-full sm:w-auto inline-block text-center px-4 py-2 rounded border">Contactar por WhatsApp</a>
          </div>
        </div>
      </form>
    </div>
    <p class="mt-4 text-sm text-gray-600">También puedes escribir a: <a href="mailto:garrotenoguerorocio@gmail.com">garrotenoguerorocio@gmail.com</a></p>
  </section>
</template>

<script setup lang="ts">
const whatsappNumber = '+34600604215'
const whatsappLink = `https://wa.me/${whatsappNumber.replace('+','')}`
</script>
