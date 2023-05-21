# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

---

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

---

### Heading

# H1
## H2
### H3

---

### Bold

**bold text**

---

### Italic

*italicized text*

***bold italicized text***

_italicized text_

<em>italicized text</em>

---

### Line Breaks

First line with two spaces after.  
And the next line.

First line with the HTML tag after.<br>
And the next line.

---

### Blockquote

> blockquote

---

### Blockquotes with Other Elements

> #### The quarterly results look great!
>
> * Revenue was off the chart.
> * Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

---

### Ordered List

1. First item
1. Second item
1. Third item
    1. Indented item
    1. Indented item
1. Fourth item

---

### Unordered List

* First item
* Second item
* Third item
    * Indented item
    * Indented item
* Fourth item

Mix

1. First item
1. Second item
1. Third item
    * Indented item
    * Indented item
1. Fourth item

* This is the first list item.
* Here's the second list item.

    I need to add another paragraph below the second list item.
    >I need to add another paragraph below the second list item.

* And here's the third list item.

---

### Code

`code`

---

### Horizontal Rule

---

---

### Link

[Markdown Guide](https://www.markdownguide.org)

[Link](#link)

[Link](markdown.md#code)

[Markdown Guide2][8]
> *can't have tab*
  [8]: https://www.markdownguide.org

---

### Formatting Links

I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).  

---

### URLs and Email Addresses

<https://www.markdownguide.org>
<fake@example.com>

---

### Image

![img](https://www.markdownguide.org/assets/images/tux.png)

![img][11]

[![Light mode][11]][11]

[11]: https://www.markdownguide.org/assets/images/tux.png

abs img

[![An old rock in the desert](/images/cdb-arch.png "Shiprock, New Mexico by Beau Rogers")](https://crossdb.org/)

rel img
[![An old rock in the desert](../../images/cdb-arch.png "Shiprock, New Mexico by Beau Rogers")](https://crossdb.org/)

![Image title](../../images/cdb-arch.png){ align=left width=400 }
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

image in left  
image in left  
image in left  
image in left  
image in left  
image in left  
image in left  
image in left  

---

### Escaping Characters

\* \`

---

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

---

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

---

### Fenced Code Block

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

---

### Footnote

Here's a sentence with a footnote. [^1]

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

---

### Definition List

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

---

### Strikethrough

~~The world is flat.~~

---

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

### Emoji

❤️ That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

---

### Highlight

I need to highlight these ==very important words==.

---

### Subscript

H~2~O

---

### Superscript

X^2^

---

### Automatic URL Linking

http://www.example.com

`http://www.example.com`
