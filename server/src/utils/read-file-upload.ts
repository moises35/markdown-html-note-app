import fs from 'fs/promises'

export const readFile = async (filePath: string): Promise<string> => {
  const file = await fs.readFile(filePath, 'utf-8')

  return file
}