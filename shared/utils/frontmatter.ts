export function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return {
      title: '',
      description: '',
      updated: '',
      body: raw.trim(),
    }
  }

  const [, frontmatter = '', markdown = ''] = match

  const fields = Object.fromEntries(
    frontmatter
      .split(/\r?\n/)
      .map((line) => {
        const sep = line.indexOf(':')
        if (sep === -1) {
          return null
        }
        return [line.slice(0, sep).trim(), line.slice(sep + 1).trim()]
      })
      .filter((entry): entry is [string, string] => Boolean(entry)),
  )

  return {
    title: fields.title ?? '',
    description: fields.description ?? '',
    updated: fields.updated ?? '',
    body: markdown.trim(),
  }
}
