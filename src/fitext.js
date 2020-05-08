const isOverflowing = (wrapper, container) => {
    const containerPaddingY = parseFloat(getComputedStyle(container).paddingTop) + parseFloat(getComputedStyle(container).paddingBottom)
    const containerHeight = container.offsetHeight - containerPaddingY

    return wrapper.offsetHeight > containerHeight
}

const updateFontSize = (element, amount) => {
    const childFontSize = parseFloat(getComputedStyle(element).fontSize)
    element.style.fontSize = `${childFontSize + amount}px`
}

const fitext = (selector, wideable) => {
    const fittables = document.querySelectorAll(selector)

    const wrapperClassName = 'fitter'

    fittables.forEach(fittableContainer => {
        if (!RegExp(wrapperClassName).test(fittableContainer.firstElementChild.className)) {
            fittableContainer.innerHTML = `<div class='${wrapperClassName}'>${fittableContainer.innerHTML}</div>`
        }

        const wrapper = fittableContainer.firstElementChild // get the wrapper we've just added to the container
        const elementsToFit = [...fittableContainer.querySelectorAll('*')]

        wrapper.style.display = 'inline-block'

        elementsToFit.forEach(element => {
            if (!element.dataset.size) {
                element.dataset.size = getComputedStyle(element).fontSize
            }
        })

        // This is where the font sizes of the elements are computed
        const computeFontSizes = () => {
            if (isOverflowing(wrapper, fittableContainer)) {
                while (isOverflowing(wrapper, fittableContainer)) {
                    elementsToFit.forEach(element => {
                        updateFontSize(element, -1)
                    })
                }
            } else {
                if (wideable) {
                    while (!isOverflowing(wrapper, fittableContainer)) {
                        elementsToFit.forEach(child => {
                            updateFontSize(child, 1)
                        })
                    }
                } else {
                    elementsToFit.forEach(element => {
                        parseFloat(element.style.fontSize) * 1.01 < element.dataset.size
                            ? updateFontSize(element, 1.01)
                            : element.style.removeProperty('font-size')
                    })
                }
            }

            if (isOverflowing(wrapper, fittableContainer)) {
                computeFontSizes()
            }
        }

        computeFontSizes()

        wrapper.style.removeProperty('display')
    })
}

export default fitext
