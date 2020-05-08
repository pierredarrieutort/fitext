export default function fitext(fittables, wideable) {
    [...fittables].forEach(box => {
        const wrapperClassName = 'fitter'

        if (!RegExp(wrapperClassName).test(box.firstElementChild.className)) {
            box.innerHTML = `<div class='${wrapperClassName}'>${box.innerHTML}</div>`
        }

        const fitter = box.firstElementChild
        const children = [...box.querySelectorAll('*')]

        fitter.style.display = 'inline-block'

        const core = () => {
            const overflowing = () => {
                const boxPaddingY = parseFloat(getComputedStyle(box).paddingTop) + parseFloat(getComputedStyle(box).paddingBottom)
                const boxHeight = box.offsetHeight - boxPaddingY

                return fitter.offsetHeight > boxHeight
            }

            const updateFontSize = (child, multiplier) => {
                const childFontSize = parseFloat(getComputedStyle(child).fontSize)
                child.style.fontSize = `${childFontSize * multiplier}px`
            }

            children.forEach(child => {
                if (!child.dataset.size) {
                    child.dataset.size = getComputedStyle(child).fontSize
                }
            })

            function check() {
                if (overflowing()) {
                    while (overflowing()) {
                        children.forEach(child => updateFontSize(child, .99))
                    }
                } else {
                    if (wideable) {
                        while (!overflowing()) {
                            children.forEach(child => updateFontSize(child, 1.01))
                        }
                    } else {
                        children.forEach(child => {
                            parseFloat(child.style.fontSize) * 1.01 < child.dataset.size
                                ? updateFontSize(child, 1.01)
                                : child.style.removeProperty('font-size')
                        })
                    }
                }

                if (overflowing()) {
                    check()
                }
            }

            check()
        }

        core()

        fitter.style.removeProperty('display')
    })
}
