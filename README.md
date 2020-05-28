<h1 align="center">fitext</h1>

Fitext is a module which adapts the textual elements so that they are always contained in their parents without ever exceeding whatever the parent height and width. This [lightweight](#performance-tips) library using no-one dependency. **You can find a playable demo [here](https://pierredarrieutort.github.io/fitext/).**

<div align="center">
    <img src="./src/img/fitext_logo.jpg" alt="Logo fitext">
</div>

## Table of contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Example](#Example)
4. [Using a CDN](#using-a-cdn)
5. [Options](#options)
6. [Performance Checklist](#performance-tips)
7. [Contributors](#contributors)
8. [License](#license)

## Installation

```shell
$ npm install --save fitext
```
```shell
$ yarn add fitext
```

## Getting Started

**HTML :**
```html
<body>
    <div class="fit-this-text">
        <h1>Resize your window</h1>
        <h2>Play with responsive 💡</h2>
        <p>Insert a huge lorem ipsum text !</p>
    </div>
</body>
```

**ES6 Modules :**
```js
import fitext from 'fitext'

fitext(true);
```

**No-module :**
```html
<script src='dist/fitext.min.js' defer></script>
<script>
    window.addEventListener('DOMContentLoaded', function() {
        fitext(true);
    });
</script>
```

## Example

```js
import fitext from 'fitext'


const EVENTS = ['DOMContentLoaded', 'resize']

EVENTS.forEach( e => window.addEventListener( e, fitext ) )
//OR
EVENTS.forEach( e => window.addEventListener( e, () => fitext(true) ) )
```

In the previous example, we listen to all event that can makes overflow texts from their containers, we prevent all break cases by executing the `fitext` function.

## Using a CDN

- <u>Minified version :</u>
    - `https://cdn.jsdelivr.net/npm/fitext@latest/dist/fitext.umd.js`
    - `https://cdn.jsdelivr.net/npm/fitext@latest/dist/fitext.cjs.js`
    - `https://cdn.jsdelivr.net/npm/fitext@latest/dist/fitext.esm.js`
    <br/>
    
- <u>Original version :</u>
    - `https://cdn.jsdelivr.net/npm/fitext@latest/src/fitext.js`
    <br/>

- For specific files or enhanced configuration you can go [here](https://www.jsdelivr.com/package/npm/fitext).


## Options

You can pass options in `fitext`. Allowed values are as follows :

|Name|Type|Default|Description|
|:--:|:---:|:-----:|:---------|
|**`wideable`**|`{ Boolean }`|`false`|Enables the font-size enlarger. [More](#wideable)|

- ### `wideable` :
    This option enlarges the font size above the font size established before executing the `fitext` function.
    The default behavior of this options limits the font-size to the font-size established before the function execution.

## Performance Checklist

Good to know : Fitext is a very lightweight module : **Less than 1 kB** !

**To increase `fitext` performances :**
- Try to use relative font-size wherever possible.
- If you targeting a parent element all child are already taken in account, don't execute a `fitext` function on them.
- Try to avoid get to much containers into the fittable elements.

## Contributors

<table>
    <tbody>
        <tr>
            <td align="center" width="140">
                <a href="https://github.com/pierredarrieutort">
                    <img src="https://avatars0.githubusercontent.com/u/25182438?s=460&amp;v=4" alt="Pierre Darrieutort" width="100px;" />
                    <br/>
                    <sub><strong>Pierre Darrieutort</strong></sub>
                </a><br>
                    <sub><i>Core</i></sub>
            </td>
            <td align="center" width="140">
                <a href=https://www.instagram.com/jape_photography/">
                    <img src="https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/87216381_788522074974374_7740995681304707072_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=skjsIYhclVgAX9ewtZk&oh=17baa04f8587b0089e9b2e22ef0624e1&oe=5ED93384" alt="Jape Photography" width="100px;" />
                    <br/>
                    <sub><strong>Jape</strong></sub>
                </a><br>
                    <sub><i>Branding</i></sub>
            </td>
            <td align="center" width="140">
                <a href="https://github.com/mathieudaix">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/95019821_1336186823257776_6091369584101687296_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=vzl7zKAyKi0AX9JY36K&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=c0b399312a81efd43099d87ea03d8b37&oe=5ECFC9AF" alt="Mathieu Daix" width="100px;" />
                    <br/>
                    <sub><strong>Mathieu Daix</strong></sub>
                </a><br>
                    <sub><i>Design</i></sub>
            </td>
            <td align="center" width="140">
                <a href="https://github.com/osdevisnot">
                    <img src="https://avatars1.githubusercontent.com/u/802242?s=460&u=db96fd4a39b0b50330975540ba61cf30eeaa4537&v=4" alt="Abhishek Shende" width="100px;" />
                    <br/>
                    <sub><strong>Abhishek Shende</strong></sub>
                </a><br>
                    <sub><i>Klap Integration</i></sub>
            </td>
        </tr>
    </tbody>
</table>

## License

This project is under [ISC License](LICENSE.md).
