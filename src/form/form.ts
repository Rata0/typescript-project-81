import { Tag } from '../tags'
import FormBuilder from './formBuilder'

class HexletCode {
  static formFor(
    template: Record<string, unknown>,
    attributes: Record<string, string> = {},
    callback: (form: FormBuilder) => void,
  ): string {
    const formAttributes: Record<string, string> = {
      action: attributes.url || '#',
      method: attributes.method || 'post',
    }

    const formBuilder = new FormBuilder(template)
    callback(formBuilder)
    const fields = formBuilder.getFields()
    const content = fields.join('\n    ')

    const from = new Tag('form', formAttributes, `\n    ${content}\n`)
    return from.toString()
  }
}

export default HexletCode
