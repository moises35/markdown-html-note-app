import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:5173',
  'https://movies.com',
  'https://midu.dev'
]

export function corsMiddleware ({ originAccept = ACCEPTED_ORIGINS } = {}): ReturnType<typeof cors> {
  return cors({
    origin: (origin: string | undefined, callback) => {
      if (origin === undefined || origin === '' || origin === null) {
        return callback(null, true)
      }

      if (originAccept.includes(origin)) {
        return callback(null, true)
      }

      return callback(new Error('Not allowed by CORS'))
    }
  })
}
