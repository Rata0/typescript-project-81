class Tag {
  constructor(
    private name: string,
    private attributes: Record<string, string> = {},
    private content = '',
  ) {}

  toString(): string {
    const attributes = this.formatAttributes()
    const selfClosingTags = ['br', 'img', 'input', 'meta', 'link', 'hr', 'col', 'area', 'base', 'source']

    if (selfClosingTags.includes(this.name)) {
      return `<${this.name}${attributes}>`
    }

    return `<${this.name}${attributes}>${this.content}</${this.name}>`
  }

  formatAttributes(): string {
    const attributes = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('')

    return attributes
  }
}

export default Tag
