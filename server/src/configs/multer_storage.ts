import { diskStorage } from 'multer'
import type { Options } from 'multer'
import { parse } from 'path'

export const storage = diskStorage({
  destination: 'uploads_md/',
  filename: (req, file, cb) => {
    const date = new Date()
    const uniqueSuffix = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}_${Math.round(Math.random() * 1E9)}`
    const title = parse(file.originalname).name
    cb(null, title + '_' + uniqueSuffix + '.md')
  }
})

export const limits: Options['limits'] = {
  fileSize: 500 * 1024
}
