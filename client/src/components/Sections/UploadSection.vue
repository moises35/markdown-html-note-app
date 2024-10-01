<template>
  <div class="bg-gray-800 rounded-lg shadow-md p-6 pb-8">
    <h2 class="text-xl font-semibold mb-4">Crear Nota</h2>

    <label
      for="dropzone-file"
      class="flex flex-col items-center justify-center mb-4 w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-3 pb-3">
        <FileIcon />
        <p class="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
          Click para subir el archivo
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          Solo se permiten archivos markdown (.md)
        </p>
      </div>
      <input type="file" id="dropzone-file" @change="() => {}" accept=".md" class="hidden" />
    </label>
    <textarea
      placeholder="Escribe tu nota aquí o sube un archivo markdown..."
      class="w-full h-40 p-2 bg-gray-700 text-gray-100 rounded-md mb-4 resize-none"
    ></textarea>
    <div class="flex flex-wrap gap-2">
      <AtomBtn
        @click="() => {}"
        label="Revisar Gramática"
        classBtn="bg-blue-600 hover:bg-blue-700"
      />
      <AtomBtn @click="() => {}" label="Guardar Nota" classBtn="bg-green-600 hover:bg-green-700" />
      <AtomBtn
        @click="() => {}"
        label="Renderizar HTML"
        classBtn="bg-purple-600 hover:bg-purple-700"
      />
      <AtomBtn @click="() => {}" label="Limpiar" classBtn="bg-red-600 hover:bg-red-700" />
    </div>
    <!-- <p v-if="grammarCheckResult" class="mt-2 text-sm text-green-400">{{ grammarCheckResult }}</p> -->
  </div>
</template>

<script setup lang="ts">
import AtomBtn from '../Atom/AtomBtn.vue'
import FileIcon from '../Icons/FileIcon.vue'
</script>

<style lang="scss"></style>
