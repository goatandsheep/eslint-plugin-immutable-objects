# eslint-plugin-immutable-objects

ESlint plugin that forces declaring all const objects using Object.freeze.

## Installation

After having installed [ESLint](https://www.github.com/eslint/eslint), install the rule:

```bash
$ npm install eslint-plugin-immutable-objects --save-dev
```

## Configuration

Add `immutable-objects` to your `.eslintrc`:

```json
{
  "plugins": [
    "immutable-objects"
  ],
  "rules": {
    "immutable-objects/immutable-objects": 2
  }
}
```
