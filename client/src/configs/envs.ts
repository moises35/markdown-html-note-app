const envs = import.meta.env

export default {
  API_URL_BASE: envs.VITE_URL_API_BASE ?? ''
}
