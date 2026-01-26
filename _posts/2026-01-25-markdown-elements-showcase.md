---
layout: post
title: "Markdown Elements Showcase"
date: 2026-01-25 11:00:00 +0100
categories: [tutorial, reference]
tags: [markdown, jekyll, examples]
published: false
---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

## Text Formatting

This is a paragraph with **bold text**, *italic text*, and ***bold italic text***.

You can also use `inline code` for technical terms.

~~This text is strikethrough~~.

## Lists

### Unordered List
- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item

### Ordered List
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task List
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task

## Blockquotes

> This is a blockquote.
> It can span multiple lines.

> This is a nested blockquote.
> > With another level inside.

## Code Blocks

```python
def hello_world():
    print("Hello, World!")
    return True
```

```javascript
function helloWorld() {
  console.log("Hello, World!");
  return true;
}
```

```html
<div class="example">
  <p>This is example HTML code</p>
</div>
```

```bash
# This is a bash command
echo "Hello from terminal"
git add .
git commit -m "My commit message"
```

## Horizontal Rules

---

## Links

[This is a link](https://example.com)

[Email link](mailto:dccdelang@outlook.com)

[Link with title](https://example.com "Example Site")

## Images

![Alt text for image]({{ '/assets/images/example.jpg' | relative_url }})

## Tables

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

## Definition Lists

HTML
: HyperText Markup Language - Used to structure web pages

CSS
: Cascading Style Sheets - Used to style web pages

JavaScript
: A programming language for interactive web pages

## Inline HTML

You can mix HTML directly in Markdown:

<div style="background-color: #f0f0f0; padding: 20px; border-radius: 5px; margin: 20px 0;">
  <p><strong>Info Box:</strong> This is a styled container using inline HTML.</p>
</div>

<div style="background-color: #ffe6e6; padding: 15px; border-left: 4px solid #ff0000; margin: 20px 0;">
  <p><strong>Warning:</strong> Always test your markdown before publishing.</p>
</div>

## Escaping Characters

If you need to use special characters literally:
\* This would normally be a bullet point
\# This would normally be a heading

## Footnotes

Here's a sentence with a footnote[^1].

Another sentence with a different footnote[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote with more detail.

## Subscript and Superscript

H<sub>2</sub>O is water.

E = mc<sup>2</sup> is Einstein's equation.

## Custom CSS Classes

You can create custom styles in your `_sass/minima/custom-styles.scss`:

<span style="color: red;">Red text using inline style</span>

---

That's a comprehensive showcase of Markdown elements you can use in your Jekyll posts!
