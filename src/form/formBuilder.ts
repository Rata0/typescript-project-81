import { Tag } from '../tags'

class FormBuilder {
  private fields: string[] = []

  constructor(private template: Record<string, unknown>) {}

  input(name: string, attributes: Record<string, string | number> = {}): void {
    if (!(name in this.template)) {
      throw new Error(`Error: Field '${name}' does not exist in the template.`)
    }

    const value = String(this.template[name])
    const fieldType = attributes.as || 'input'
    const { as: _, ...restAttributes } = attributes

    if (fieldType === 'textarea') {
      const defaultTextareaAttributes = {
        cols: '20',
        rows: '40',
        name,
      }

      const finalAttributes = { ...defaultTextareaAttributes, ...restAttributes }
      const textarea = new Tag('textarea', finalAttributes, value)
      this.fields.push(textarea.toString())
    }
    else {
      const defaultInputAttributes = {
        type: 'text',
        name,
        value,
      }

      const finalAttributes = { ...defaultInputAttributes, ...restAttributes }
      const input = new Tag('input', finalAttributes)
      this.fields.push(input.toString())
    }
  }

  getFields(): string[] {
    return this.fields
  }
}

export default FormBuilder
