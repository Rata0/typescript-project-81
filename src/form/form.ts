import { Tag } from '../tags'

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

    const from = new Tag('form', formAttributes)

    return from.toString()
  }
}

export default HexletCode
