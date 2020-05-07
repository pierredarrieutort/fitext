import './styles.scss'

import fit from './fitext'

window.addEventListener('DOMContentLoaded', () => {
    // const fittableElements = document.getElementsByClassName('fitter-container')
    // const wideable = true

    // fit(fittableElements, wideable)

    demo()
})


//** FOLLOWING CODE IS DEDICATED TO THE DEMO **//

function demo() {
    const widthInput = document.querySelector('#widthInput')
    const heightInput = document.querySelector('#heightInput')
    const widthOutput = document.querySelector('#widthOutput')
    const heightOutput = document.querySelector('#heightOutput')
    const resetButton = document.querySelector('#resetButton')

    const enlargeCheckbox = document.querySelector('#enlargeCheckbox')

    const initialSize = [widthInput.value, heightInput.value]
    const fitterContainer = document.querySelector('.fitter-container')

    function handleWidth({ target }) {
        widthOutput.value = target.value
        fitterContainer.style.width = `${target.value}%`
        fit([fitterContainer], enlargeCheckbox.checked)
    }

    function handleHeight({ target }) {
        heightOutput.value = target.value
        fitterContainer.style.height = `${target.value}%`
        fit([fitterContainer], enlargeCheckbox.checked)
    }

    function reset() {
        widthInput.value = initialSize[0]
        heightInput.value = initialSize[1]

        widthOutput.value = initialSize[0]
        heightOutput.value = initialSize[1]

        fitterContainer.style.width = `${initialSize[0]}%`
        fitterContainer.style.height = `${initialSize[1]}%`

        fit([fitterContainer], enlargeCheckbox.checked)
    }

    function handleWideable() {
        fit([fitterContainer], enlargeCheckbox.checked)
    }

    widthInput.oninput = handleWidth
    heightInput.oninput = handleHeight
    resetButton.onclick = reset
    enlargeCheckbox.onchange = handleWideable

    // Init
    fitterContainer.style.width = `${widthInput.value}%`
    fitterContainer.style.height = `${heightInput.value}%`
    fit([fitterContainer], enlargeCheckbox.checked)
}
