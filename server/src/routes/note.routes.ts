import { Router } from 'express'
import * as NoteControllers from '@/controllers/note.controllers'
import type { Multer } from 'multer'

interface NoteRouterProps {
  multer: Multer
}

export const createNoteRouter = ({ multer }: NoteRouterProps): Router => {
  const noteRouter = Router()

  noteRouter.get('/', NoteControllers.getNotes)

  noteRouter.get('/:fileName', NoteControllers.getNoteByFileName)

  noteRouter.post('/create', multer.single('file'), NoteControllers.createNote)

  noteRouter.post('/md-to-html', NoteControllers.mdToHtml)

  return noteRouter
}
