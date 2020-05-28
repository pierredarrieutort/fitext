export default function fitext(wideable, stagger = .5) {
    Array.from(document.getElementsByClassName('fit-this-text')).forEach(box => {

        const WRAPPER_CLASSNAME = 'fitter'
        if (!RegExp(WRAPPER_CLASSNAME).test(box.firstElementChild.className))
            box.innerHTML = `<div class='${WRAPPER_CLASSNAME}'>${box.innerHTML}</div>`

        const FITTER = box.firstElementChild
        FITTER.style.display = 'inline-block'

        const
            CHILDREN = Array.from(box.getElementsByTagName('*')),
            overflowing = () => {
                const
                    BOX_PADDING_TOP = parseFloat(getComputedStyle(box).paddingTop),
                    BOX_PADDING_BOTTOM = parseFloat(getComputedStyle(box).paddingBottom),
                    NORMALIZED_BOX_HEIGHT = box.offsetHeight - (BOX_PADDING_TOP + BOX_PADDING_BOTTOM)

                console.log(FITTER.offsetHeight, NORMALIZED_BOX_HEIGHT, FITTER.offsetHeight > NORMALIZED_BOX_HEIGHT)
                return FITTER.offsetHeight > NORMALIZED_BOX_HEIGHT
            }

        CHILDREN.forEach(child => {
            if (!child.dataset.size) child.dataset.size = getComputedStyle(child).fontSize
        })

        function update_font_size(child, adder) {
            return child.style.fontSize = `${parseFloat(getComputedStyle(child).fontSize) + (adder)}px`
        }

        let max_wide = false
        while (!overflowing() && !max_wide) {
            CHILDREN.forEach(child => {
                wideable || parseFloat(child.style.fontSize) + stagger < parseFloat(child.dataset.size)
                    ? (update_font_size(child, stagger), max_wide = false)
                    : (child.style.removeProperty('font-size'), max_wide = true)
            })
        }

        while (overflowing())
            CHILDREN.forEach(child => update_font_size(child, -stagger))

        FITTER.style.removeProperty('display')
    })
}
