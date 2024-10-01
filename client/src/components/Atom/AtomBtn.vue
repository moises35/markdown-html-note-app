<template>
  <button
    @click="onClick"
    :class="'px-4 py-2 text-white rounded-md transition duration-300 ' + classBtn"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  onClick: () => void
  label: string
  classBtn: string
}

defineProps<Props>()
</script>

<style lang="scss"></style>
