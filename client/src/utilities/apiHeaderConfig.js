import { useAuth } from '@/stores/auth'

const auth = useAuth()

export const apiHeader = {
  // Config Headers
  config() {
    const conf = {
      headers: { auth: auth.getToken }
    }
    return conf
  }
}
