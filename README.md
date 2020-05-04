<h1 align="center">fitext</h1>

Fitext is a module which adapts the textual elements so that they are always contained in their parents without ever exceeding whatever the parent height and width. This [lightweight](#performance-tips) library using no-one dependency. **You can find a playable demo [here](https://pierredarrieutort.github.io/fitext/).**
___

<div align="center">
    <img src="./src/img/fitext_logo.jpg" alt="Logo fitext">
</div>

## Table of contents

1. [Installation](#installation)
2. [Getting Started](#getting-started)
3. [Example](#Example)
4. [Using a CDN](#using-a-cdn)
5. [Options](#options)
6. [Browser Support](#browser-suport)
7. [Performance tips](#performance-tips)
8. [Contributors](#contributors)
9. [License](#license)

## Installation

```shell
$ npm install --save fitext
```
```shell
$ yarn add fitext
```

## Getting Started

ES6 Modules :
```js
import fit from 'fitext';

const fittables = document.getElementsByClassName('fit-this-text');
fit(fittables, true);
```

No-module :
```html
<script src='lib/fitext.min.js' defer></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const fittables = document.getElementsByClassName('fit-this-text');
        fit(fittables, true);
    });
</script>
```
## Example

```js
import fit from 'fitext'


['DOMContentLoaded', 'resize'].forEach( e => window.addEventListener( e, adjustHeight ) )

function adjustHeight() {
    const
        ELEMENTS = document.getElementsByClassName( 'fit-this-text' ),
        IS_WIDEABLE = true

    fit( ELEMENTS, IS_WIDEABLE )
}
```

In the previous example, we listen to all event that can makes overflow texts from their containers, we prevent all break cases by executing the `fit` function.

## Using a CDN

- Via NPM :
    _soon._<!-- https://cdn.jsdelivr.net/npm/package@version/file -->

- Via GitHub :
    _soon._<!-- https://cdn.jsdelivr.net/gh/user/repo@version/file -->


## Options

You can pass options in `fitext`. Allowed values are as follows :

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`fittables`**|`{ Array }`|`[]`|Lists all `fittables` elements. [More](#fittables)|
|**`wideable`**|`{ Boolean }`|`false`|Enables the font-size enlarger. [More](#wideable)|

- ### `fittables` :
    This option can accept arrays or nodes/HTML collection or anything else that can be destructured following an array pattern. If you want to use a `document.querySelector('element')` pass it as an array like this `[document.querySelector('element')]`.

- ### `wideable` :
    This option enlarges the font size above the font size established before executing the `fit` function.
    The default behavior of this options limits the font-size to the font-size established before the function execution.

## Browser Support

`defaults` as `> 0.5%, last 2 versions, Firefox ESR, not dead`

You can check [here](https://github.com/browserslist/browserslist#queries) what means the configuration parameters used in the [package.json](package.json) at `browserslist`.
The support is checked on [this range of browsers](https://browserl.ist/?q=defaults).

##Performance Tips

Type|Value|Why this weight ?
:----:|:-----:|---
**Original**|<span style="color:lightseagreen">1.81</span> <sup>kB</sup>| As developed, without any browser support and not as a module. [It's here](src/fitext.js, "Get the file").
**Minified**|<span style="color:mediumseagreen">2.79</span> <sup>kB</sup>| With all [Browser Support](#browser-suport), as a module and of course minified !
**Gzipped**|<span style="color:green">1.20</span> <sup>kB</sup>| Same as the minified version but you support gzip 🎉 !

- Try to use relative font-size wherever possible.
- If you targeting a parent element all child are already taken in account, don't execute a `fit` function on them.
- Try to avoid get to much containers into the fittable elements.

## Contributors

<table>
    <tbody>
        <tr>
            <td align="center" width="140">
                <a href="https://github.com/pierredarrieutort">
                    <img src="https://avatars0.githubusercontent.com/u/25182438?s=460&amp;v=4" alt="Pierre Darrieutort" width="100px;" />
                    <br />
                    <sub><strong>Pierre Darrieutort</strong></sub>
                </a><br>
                    <sub><i>Core</i></sub>
            </td>
            <td align="center" width="140">
                <a href="https://github.com/mathieudaix">
                    <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/95019821_1336186823257776_6091369584101687296_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=vzl7zKAyKi0AX9JY36K&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=c0b399312a81efd43099d87ea03d8b37&oe=5ECFC9AF" alt="Mathieu Daix" width="100px;" />
                    <br />
                    <sub><strong>Mathieu Daix</strong></sub>
                </a><br>
                    <sub><i>Design</i></sub>
            </td>
            <td align="center" width="140">
                <a href=https://www.instagram.com/jape_photography/">
                    <img src="https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-19/s150x150/87216381_788522074974374_7740995681304707072_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_ohc=skjsIYhclVgAX9ewtZk&oh=17baa04f8587b0089e9b2e22ef0624e1&oe=5ED93384" alt="Jape Photography" width="100px;" />
                    <br />
                    <sub><strong>Jape</strong></sub>
                </a><br>
                    <sub><i>Branding</i></sub>
            </td>
        </tr>
    </tbody>
</table>

## License

This project is under [ISC License](LICENSE.md).
