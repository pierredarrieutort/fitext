const isOverflowing = (wrapper, container) => {
    const containerPaddingY = parseFloat(getComputedStyle(container).paddingTop) + parseFloat(getComputedStyle(container).paddingBottom)
    const containerHeight = container.offsetHeight - containerPaddingY

    return wrapper.offsetHeight > containerHeight
}

const getUpdatedFontSize = (element, amount) => {
    return parseFloat(getComputedStyle(element).fontSize) + amount
}

const fitext = (selector, enlargeFont) => {
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

        const updateFontSizes = (elements, amount) => {
            elements.forEach(element => {
                element.style.fontSize = `${getUpdatedFontSize(element, amount)}px`
            })
        }

        // This is where the font sizes of the elements are computed
        const computeFontSizes = () => {
            if (isOverflowing(wrapper, fittableContainer)) {
                while (isOverflowing(wrapper, fittableContainer)) {
                    updateFontSizes(elementsToFit, -1)
                }
            } else {
                if (enlargeFont) {
                    while (!isOverflowing(wrapper, fittableContainer)) {
                        updateFontSizes(elementsToFit, 1)
                    }
                } else {
                    elementsToFit.forEach(element => {
                        getUpdatedFontSize(element, 1) < element.dataset.size
                            ? element.style.fontSize = `${getUpdatedFontSize(element, 1)}px`
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
