function isOverflowing(wrapper, container) {
    const containerPaddingY = parseFloat(getComputedStyle(container).paddingTop) + parseFloat(getComputedStyle(container).paddingBottom)
    const containerHeight = container.offsetHeight - containerPaddingY

    return wrapper.offsetHeight > containerHeight
}

function getUpdatedFontSize(element, amount) {
    return parseFloat(getComputedStyle(element).fontSize) + amount
}

function updateFontSizes(elements, amount) {
    elements.forEach(element => {
        element.style.fontSize = `${getUpdatedFontSize(element, amount)}px`
    })
}

function getComputationDirection(isOverflowing) {
    return isOverflowing ? 'd' : 'i'
}

function fitElements(container, { fitterContainerClassName, fontSizeStep, enlargeFont }) {
    if (!RegExp(fitterContainerClassName).test(container.firstElementChild.className)) {
        container.innerHTML = `<div class='${fitterContainerClassName}'>${container.innerHTML}</div>`
    }

    const wrapper = container.firstElementChild // get the wrapper we've just added to the container
    wrapper.style.display = 'inline-block'

    const elementsToFit = Array.from(container.querySelectorAll('*'))

    elementsToFit.forEach(element => {
        if (!element.dataset.size) {
            element.dataset.size = getComputedStyle(element).fontSize
        }
    })

    function computeFontSizes(computationDirection) {
        if (isOverflowing(wrapper, container) && computationDirection === 'd') {
            updateFontSizes(elementsToFit, -fontSizeStep)
            return computeFontSizes(computationDirection)
        }

        if (!isOverflowing(wrapper, container) && computationDirection === 'i') {
            updateFontSizes(elementsToFit, fontSizeStep)
            return computeFontSizes(computationDirection)
        }
    }

    const computationDirection = getComputationDirection(isOverflowing(wrapper, container))
    computeFontSizes(computationDirection)

    // Last step after the computation
    if (isOverflowing(wrapper, container)) {
        updateFontSizes(elementsToFit, -fontSizeStep)
    } else {
        updateFontSizes(elementsToFit, fontSizeStep)
    }

    wrapper.style.removeProperty('display')
}

function fitext(selector, options = {}) {
    const fitterContainerClassName = options.fitterContainerClassName || 'fitter'
    const fontSizeStep = options.fontSizeStep || .25
    const enlargeFont = options.enlargeFont || true

    const fittables = Array.from(document.querySelectorAll(selector))

    fittables.forEach(fittableContainer => {
        fitElements(fittableContainer, { fitterContainerClassName, fontSizeStep, enlargeFont })
    })
}

export default fitext
