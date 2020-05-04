import './styles.scss'

import fit from './fitext'


['DOMContentLoaded', 'resize'].forEach(event => window.addEventListener(event, adjustHeight))

function adjustHeight() {
    const ELEMENTS = document.getElementsByClassName('fit-this-text')
    const IS_WIDEABLE = true

    fit(ELEMENTS, IS_WIDEABLE)
}


//** FOLLOWING CODE IS DEDICATED TO THE DEMO **//

window.addEventListener('DOMContentLoaded', demo)

function demo() {
    const widthInput = document.querySelector('#widthInput')
    const heightInput = document.querySelector('#heightInput')
    const widthOutput = document.querySelector('#widthOutput')
    const heightOutput = document.querySelector('#heightOutput')
    const resetButton = document.querySelector('#resetButton')
    const wideableCheckbox = document.querySelector('#wideableCheckbox')

    const initialSize = [widthInput.value, heightInput.value]
    const fitterContainer = document.querySelector('.fit-this-text')

    fitterContainer.style.width = `${widthInput.value}%`
    fitterContainer.style.height = `${heightInput.value}%`

    function handleWidth({ target }) {
        widthOutput.value = target.value
        fitterContainer.style.width = `${target.value}%`
        fit([fitterContainer], wideableCheckbox.checked)
    }

    function handleHeight({ target }) {
        heightOutput.value = target.value
        fitterContainer.style.height = `${target.value}%`
        fit([fitterContainer], wideableCheckbox.checked)
    }

    function reset() {
        widthInput.value = initialSize[0]
        heightInput.value = initialSize[1]

        widthOutput.value = initialSize[0]
        heightOutput.value = initialSize[1]

        fitterContainer.style.width = initialSize[0]
        fitterContainer.style.height = initialSize[1]

        fit([fitterContainer], wideableCheckbox.checked)
    }

    function handleWideable() {
        fit([fitterContainer], wideableCheckbox.checked)
    }

    widthInput.oninput = handleWidth
    heightInput.oninput = handleHeight
    resetButton.onclick = reset
    wideableCheckbox.onchange = handleWideable
}
