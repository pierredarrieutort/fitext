export default function fitext(wideable, stagger = 1) {
    Array.from(document.getElementsByClassName('fit-this-text')).forEach(box => {

        if (!/fitter/.test(box.firstElementChild.className))
            box.innerHTML = `<div class='fitter'>${box.innerHTML}</div>`

        const
            FITTER = box.firstElementChild,
            CHILDREN = Array.from(box.getElementsByTagName('*')),
            overflowing = () => {
                const
                    BOX_PADDING_TOP = parseFloat(getComputedStyle(box).paddingTop),
                    BOX_PADDING_BOTTOM = parseFloat(getComputedStyle(box).paddingBottom),
                    NORMALIZED_BOX_HEIGHT = box.offsetHeight - (BOX_PADDING_TOP + BOX_PADDING_BOTTOM)
                return Math.ceil(FITTER.offsetHeight - NORMALIZED_BOX_HEIGHT)
            },
            update_font_size = (child, reversed) => child.style.fontSize = `${parseFloat(getComputedStyle(child).fontSize) + (reversed ? -stagger : stagger)}px`


        CHILDREN.forEach(child => {
            if (!child.dataset.size) child.dataset.size = getComputedStyle(child).fontSize
        })

        const execCore = () => {
            let still_wideable = true

            while (overflowing() < stagger * 1.5 && overflowing() !== 0 && still_wideable)
                CHILDREN.forEach(child => {
                    if (wideable || parseFloat(child.style.fontSize) + stagger < parseFloat(child.dataset.size)) {
                        update_font_size(child)
                        still_wideable = true
                    } else {
                        child.style.removeProperty('font-size')
                        still_wideable = false
                    }
                })

            while (overflowing() > stagger * 1.5)
                CHILDREN.forEach(child => update_font_size(child, true))
        }

        execCore()
        window.addEventListener('resize', execCore)
    })
}
