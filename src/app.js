import './styles.scss'

import fitext from './fitext'

window.addEventListener('DOMContentLoaded', () => {
    // const fittableElements = document.getElementsByClassName('fitter-container')
    // const wideable = true

    // fitext(fittableElements, wideable)

    demo()
})


//** FOLLOWING CODE IS DEDICATED TO THE DEMO **//

function demo() {
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
    const fitterContainer = document.querySelector('.fitter-container')

    function handleWidth({ target }) {
        widthOutput.value = target.value
        fitterContainer.style.width = `${target.value}%`
        fitext([fitterContainer], enlargeCheckbox.checked)
    }

    function handleHeight({ target }) {
        heightOutput.value = target.value
        fitterContainer.style.height = `${target.value}%`
        fitext([fitterContainer], enlargeCheckbox.checked)
    }

    function handlePadding({ target }) {
        paddingOutput.value = target.value
        fitterContainer.style.padding = `${target.value}px`
        fitext([fitterContainer], enlargeCheckbox.checked)
    }

    function reset() {
        widthInput.value = initialSize[0]
        heightInput.value = initialSize[1]
        paddingInput.value = initialPadding

        widthOutput.value = initialSize[0]
        heightOutput.value = initialSize[1]

        fitterContainer.style.width = `${initialSize[0]}%`
        fitterContainer.style.height = `${initialSize[1]}%`

        fitext([fitterContainer], enlargeCheckbox.checked)
    }

    function handleWideable() {
        fitext([fitterContainer], enlargeCheckbox.checked)
    }

    widthInput.oninput = handleWidth
    heightInput.oninput = handleHeight
    paddingInput.oninput = handlePadding
    resetButton.onclick = reset
    enlargeCheckbox.onchange = handleWideable

    // Init
    fitterContainer.style.width = `${widthInput.value}%`
    fitterContainer.style.height = `${heightInput.value}%`
    fitterContainer.style.padding = `${paddingInput.value}px`
    fitext([fitterContainer], enlargeCheckbox.checked)
}
