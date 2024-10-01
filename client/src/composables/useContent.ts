import { ref } from 'vue'

const content = ref<string>('')
const loading = ref<boolean>(false)

export const useContent = () => {
  const setContent = (text: string) => {
    content.value = text
  }

  const clearAll = () => {
    content.value = ''
    loading.value = false
  }

  const setLoading = () => {
    loading.value = !loading.value
  }

  return {
    // Properties
    content,
    loading,

    // Methods
    setContent,
    setLoading,
    clearAll
  }
}
