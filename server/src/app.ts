import express, { json } from 'express'
import multer from 'multer'
import * as MulterConfig from '@/configs/multer_storage'
import { createNoteRouter } from '@/routes/note.routes'
import { corsMiddleware } from './middlewares/cors_middeware'

const app = express()
const PORT = process.env.PORT ?? 1234

app.use(express.json());
app.use(corsMiddleware())
app.use(express.urlencoded({ extended: true }));
app.disable('x-powered-by')

app.use('/api/notes', createNoteRouter({
  multer: multer({ storage: MulterConfig.storage, limits: MulterConfig.limits })
}))

app.listen(PORT, async () => {
  console.log(`Server is running in port http://localhost:${PORT}/api/notes`)
})
