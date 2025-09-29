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

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      as: _,
      label: customLabelText,
      labelHtml: labelAttributes,
      ...fieldAttributes
    } = attributes

    const labelText = customLabelText ? String(customLabelText) : this.capitalizeFirstLetter(name)

    const labelAttrs: Record<string, string> = { for: name }

    if (labelAttributes && typeof labelAttributes === 'object') {
      Object.entries(labelAttributes).forEach(([key, value]) => {
        labelAttrs[key] = String(value)
      })
    }

    const label = new Tag('label', labelAttrs, labelText)
    this.fields.push(label.toString())

    if (fieldType === 'textarea') {
      const defaultTextareaAttributes = {
        cols: '20',
        rows: '40',
        name,
      }

      const finalAttributes = { ...defaultTextareaAttributes, ...fieldAttributes }
      const textarea = new Tag('textarea', finalAttributes, value)
      this.fields.push(textarea.toString())
    }
    else {
      const defaultInputAttributes = {
        name,
        type: 'text',
        value,
      }

      const finalAttributes = { ...defaultInputAttributes, ...fieldAttributes }
      const input = new Tag('input', finalAttributes)
      this.fields.push(input.toString())
    }
  }

  submit(buttonText = 'Save'): void {
    const submitButton = new Tag('input', { type: 'submit', value: buttonText })
    this.fields.push(submitButton.toString())
  }

  getFields(): string[] {
    return this.fields
  }

  private capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
}

export default FormBuilder
