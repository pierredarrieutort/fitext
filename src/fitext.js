export default function fitext(wideable) {
    [...document.getElementsByClassName('fit-this-text')].forEach(box => {

        const WRAPPER_CLASSNAME = 'fitter'

        if (!RegExp(WRAPPER_CLASSNAME).test(box.firstElementChild.className))
            box.innerHTML = `<div class='${WRAPPER_CLASSNAME}'>${box.innerHTML}</div>`



        const FITTER = box.firstElementChild

        FITTER.style.display = 'inline-block';

        (function core() {

            const CHILDREN = [...box.getElementsByTagName('*')]

            function overflowing() {
                const
                    BOX_PADDING_TOP = parseFloat(getComputedStyle(box).paddingTop),
                    BOX_PADDING_BOTTOM = parseFloat(getComputedStyle(box).paddingBottom),
                    NORMALIZED_BOX_HEIGHT = box.offsetHeight - (BOX_PADDING_TOP + BOX_PADDING_BOTTOM)

                return FITTER.offsetHeight > NORMALIZED_BOX_HEIGHT
            }

            function update_font_size(child, adder) {
                return child.style.fontSize = `${parseFloat(getComputedStyle(child).fontSize) + (adder)}px`
            }



            CHILDREN.forEach(child => {
                if (!child.dataset.size)
                    child.dataset.size = getComputedStyle(child).fontSize
            });



            (function check() {
                if (overflowing())
                    while (overflowing())
                        CHILDREN.forEach(child => update_font_size(child, -.5))
                else
                    if (wideable)
                        while (!overflowing())
                            CHILDREN.forEach(child => update_font_size(child, .5))
                    else
                        CHILDREN.forEach(child => parseFloat(child.style.fontSize) + .5 < child.dataset.size
                            ? update_font_size(child, .5)
                            : child.style.removeProperty('font-size'))

                if (overflowing())
                    check()
            })()
        })()

        FITTER.style.removeProperty('display')
    })
}
