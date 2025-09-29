import path from 'node:path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { expect, test, describe } from 'vitest'
import HexletCode from "../src/form/form"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const readFixture = (filename: string) => {
  const fixturePath = path.join(__dirname, '..', '__fixtures__', filename)
  return fs.readFileSync(fixturePath, 'utf-8').trim()
}

describe('generate form', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' }

  test('form with input and textarea', () => {
    const form = HexletCode.formFor(template, { method: 'post' }, (f) => {
      f.input('name')
      f.input('job', { as: 'textarea' })
    })

    const expected = readFixture('form1.expected.html')
    expect(form.trim()).toBe(expected)
  })

  test('form with custom attributes', () => {
    const form = HexletCode.formFor(template, {}, (f) => {
      f.input('name', {class: 'user-input'})
      f.input('job')
    })

    const expected = readFixture('form2.expected.html')
    expect(form.trim()).toBe(expected)
  })

  test('form with textarea custom size', () => {
    const form = HexletCode.formFor(template, { url: '#' }, (f) => f.input('job', { as: 'textarea', rows: 50, cols: 50}))

    const expected = readFixture('form3.expected.html')
    expect(form.trim()).toBe(expected)
  })

  test('form with custom action', () => {
    const form = HexletCode.formFor(template, { url: '/users' }, (f) => {
      f.input('name')
      f.input('job', { as: 'textarea' })
    })

    const expected = readFixture('form4.expected.html')
    expect(form.trim()).toBe(expected)
  })
})
