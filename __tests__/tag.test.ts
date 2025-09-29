import { expect, test } from 'vitest'
import Tag from "../src/tags/tag"

test('creates self-closing br tag', () => {
  const tag = new Tag("br")
  expect(tag.toString()).toBe("<br>")
})

test('creates self-closing img tag with attributes', () => {
  const tag = new Tag("img", { src: "path/to/image" })
  expect(tag.toString()).toBe("<img src=\"path/to/image\">")
})

test('creates self-closing input tag with attributes', () => {
  const tag = new Tag("input", { type: "submit", value: "Save" })
  expect(tag.toString()).toBe("<input type=\"submit\" value=\"Save\">")
})

test('creates paired label tag with the content', () => {
  const tag = new Tag("label", {}, "Email")
  expect(tag.toString()).toBe("<label>Email</label>")
})

test('creates paired label tag with attributes and content', () => {
  const tag = new Tag("label", { for: "email" }, "Email")
  expect(tag.toString()).toBe("<label for=\"email\">Email</label>")
})

test('creates paired div tag', () => {
  const tag = new Tag("div")
  expect(tag.toString()).toBe("<div></div>")
})
