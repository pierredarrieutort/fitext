import './styles.scss'

import fitext from './fitext'

window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        fitext('.fitter-container', true)
    })

    demo('.fitter-container')
})


//** FOLLOWING CODE IS DEDICATED TO THE DEMO **//

function demo(selector) {
    const fitterContainer = document.querySelector(selector)

    // Form inputs
    const widthInput = document.querySelector('#widthInput')
    const heightInput = document.querySelector('#heightInput')
    const paddingInput = document.querySelector('#paddingInput')

    // Form outputs
    const widthOutput = document.querySelector('#widthOutput')
    const heightOutput = document.querySelector('#heightOutput')
    const paddingOutput = document.querySelector('#paddingOutput')

    const resetButton = document.querySelector('#resetButton')

    const enlargeCheckbox = document.querySelector('#enlargeCheckbox')

    const initialSize = [widthInput.value, heightInput.value]
    const initialPadding = paddingInput.value

    function handleWidth({ target }) {
        widthOutput.value = target.value
        fitterContainer.style.width = `${target.value}%`
        fitext(selector, enlargeCheckbox.checked)
    }

    function handleHeight({ target }) {
        heightOutput.value = target.value
        fitterContainer.style.height = `${target.value}%`
        fitext(selector, enlargeCheckbox.checked)
    }

    function handlePadding({ target }) {
        paddingOutput.value = target.value
        fitterContainer.style.padding = `${target.value}px`
        fitext(selector, enlargeCheckbox.checked)
    }

    function reset() {
        widthInput.value = initialSize[0]
        heightInput.value = initialSize[1]
        paddingInput.value = initialPadding

        widthOutput.value = initialSize[0]
        heightOutput.value = initialSize[1]

        fitterContainer.style.width = `${initialSize[0]}%`
        fitterContainer.style.height = `${initialSize[1]}%`

        fitext(selector, enlargeCheckbox.checked)
    }

    function handleEnlargeFont() {
        fitext(selector, enlargeCheckbox.checked)
    }

    widthInput.oninput = handleWidth
    heightInput.oninput = handleHeight
    paddingInput.oninput = handlePadding
    resetButton.onclick = reset
    enlargeCheckbox.onchange = handleEnlargeFont

    // Init
    fitterContainer.style.width = `${widthInput.value}%`
    fitterContainer.style.height = `${heightInput.value}%`
    fitterContainer.style.padding = `${paddingInput.value}px`
    fitext(selector, enlargeCheckbox.checked)
}
