import fs from 'fs/promises'
import { readFile } from '@/utils/read-file-upload'
import type { Request, Response } from 'express'
import { markdownToHTML } from '@/utils/markdown-to-html'

export const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const files = await fs.readdir('uploads_md')
    res.status(200).json({ message: 'Files found', data: files })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const getNoteByFileName = async (req: Request, res: Response): Promise<void> => {
  const { fileName } = req.params

  if (!fileName) {
    res.status(400).json({ message: 'Please provide a file name' })
    return
  }

  try {
    const contentFile = await readFile(`uploads_md/${fileName}`)
    res.status(200).json({ message: `File found: ${fileName}`, data: contentFile })
  } catch (error) {
    res.status(404).json({ message: 'File not found' })
  }
}

export const createNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const { file } = req

    if (!file) {
      res.status(400).json({ message: 'Please upload a file' })
      return
    }

    res.status(201).json({ message: 'File uploaded successfully', data: file })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const mdToHtml = async (req: Request, res: Response): Promise<void> => {
  const { markdown } = req.body

  if (!markdown) {
    res.status(400).json({ message: 'Please provide a markdown content' })
    return
  }

  try {
    const html = await markdownToHTML(markdown)

    res.status(200).json({ message: 'Markdown converted to HTML', data: html })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const checkGrammar = async (req: Request, res: Response): Promise<void> => {
  res.status(404).json({ message: 'Movie with ID not found' })
}
