<template>
  <div class="bg-gray-800 rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-4">Notas Guardadas</h2>
    <div class="h-[200px] overflow-y-auto">
      <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
        <li
          v-for="(note, index) in listNote"
          :key="index"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <MarkdownIcon />
          <span>{{ note }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import envs from '@/configs/envs'
import MarkdownIcon from '@/components/Icons/MarkdownIcon.vue'

const listNote = ref<string[]>([])

onMounted(() => {
  fetch(envs.API_URL_BASE)
    .then((response) => response.json())
    .then((json) => {
      listNote.value = json.data
    })
})
</script>

<style lang="css" scoped>
::-webkit-scrollbar {
  width: 8px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: #c2c9d2;
}
</style>
