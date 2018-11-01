# Const objects must be declared with Object.freeze (const-freeze)

We need a way to enforce immutable objects

## Rule Details

This rule aims to ensure all const objects have been declared using Object.freeze

Examples of **incorrect** code for this rule:

```js

const obj = { attr: 'val' }

```

Examples of **correct** code for this rule:

```js

const obj = Object.freeze({ attr: 'val' })

```

## When Not To Use It

If you want your const objects to be mutable, i.e. allow access to the following functions: `pop`, `push`, `shift`, and `unshift`.

## Further Reading

[Intro to Object Freeze](http://adripofjavascript.com/blog/drips/immutable-objects-with-object-freeze.html)
