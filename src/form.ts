class HexletCode {
  static formFor(
    template: Record<string, unknown>,
    attributes: Record<string, string> = {},
    callback: (form: unknown) => void,
  ): string {
    const formAttributes: Record<string, string> = {
      action: attributes.url || '#',
      method: attributes.method || 'post',
    }

    const formattedAttributes = Object.entries(formAttributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('')

    const from = `<form${formattedAttributes}></form>`

    return from
  }
}

export default HexletCode
