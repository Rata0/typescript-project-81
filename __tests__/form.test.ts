import { expect, test } from 'vitest'
import HexletCode from "../src/form"

test('form Generator', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  const form = HexletCode.formFor(template, {}, (f) => {});

  expect(form).toBe("<form action=\"#\" method=\"post\"></form>")
})

test('generate form with custom URL', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  const form = HexletCode.formFor(template, { url: '/users' }, (f) => {});

  expect(form).toBe("<form action=\"/users\" method=\"post\"></form>")
})

test('generate form with custom method', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };
  const form = HexletCode.formFor(template, { method: 'get' }, (f) => {})

  expect(form).toBe('<form action="#" method="get"></form>')
})
