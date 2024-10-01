<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Markdown a HTML - Conversor de Notas</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-baseline">
        <UploadSection />
        <div class="space-y-6">
          <FilesSection />
          <HtmlSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UploadSection from '@/components/Sections/UploadSection.vue'
import FilesSection from '@/components/Sections/FIlesSection.vue'
import HtmlSection from '@/components/Sections/HtmlSection.vue'
import { onMounted, ref } from 'vue'
import envs from './configs/envs'

// const handleFileUpload = (event) => {
//   file.value = event.target.files[0]
//   if (file.value) {
//     const reader = new FileReader()
//     reader.onload = (e) => {
//       noteContent.value = e.target.result
//     }
//     reader.readAsText(file.value)
//   }
// }
</script>
