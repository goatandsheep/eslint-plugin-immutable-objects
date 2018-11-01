# eslint-plugin-immutable-objects

Const objects must be immutable

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-immutable-objects`:

```
$ npm install eslint-plugin-immutable-objects --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-immutable-objects` globally.

## Usage

Add `immutable-objects` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "immutable-objects"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "immutable-objects/const-freeze": 2
    }
}
```

## Supported Rules

* `const-freeze`: discourages use of const on objects without `Object.freeze()`





