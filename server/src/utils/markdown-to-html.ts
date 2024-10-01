import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { unified } from 'unified'

export const markdownToHTML = async (markdown: string): Promise<string> => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(markdown)

  return String(file)
}
