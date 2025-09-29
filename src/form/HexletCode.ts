import { Tag } from '../tags'
import FormBuilder from './FormBuilder'

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
    const content = fields.join('')

    const from = new Tag('form', formAttributes, content)
    return from.toString()
  }
}

export default HexletCode
