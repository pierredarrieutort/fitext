import './style.scss'

import fitext from './fitext'


['DOMContentLoaded', 'resize'].forEach( event => window.addEventListener( event, adjustHeight ) )

function adjustHeight() {
    const
        ELEMENTS = document.getElementsByClassName( 'fit-this-text' ),
        IS_WIDEABLE = true

    fitext( ELEMENTS, IS_WIDEABLE )
}



//** FOLLOWING CODE IS DEDICATED TO THE DEMO **//

window.addEventListener( 'DOMContentLoaded', demo )

function demo() {

    const
        WIDTH = document.getElementById( 'width' ),
        HEIGHT = document.getElementById( 'height' ),
        HANDLEABLE = document.querySelector( '.fit-this-text' ),
        RESET = document.getElementById( 'reset' ),
        INITIAL_VALUES = [WIDTH.value, HEIGHT.value],
        WIDEABLE = document.getElementById( 'wideable' ),
        WIDTH_OUTPUT = document.getElementById( 'widthVal' ),
        HEIGHT_OUTPUT = document.getElementById( 'heightVal' )

    WIDTH.oninput = handleWidth
    HEIGHT.oninput = handleHeight
    RESET.onclick = reset
    WIDEABLE.onchange = handleWideable


    function handleWidth() {
        WIDTH_OUTPUT.value = HANDLEABLE.style.width = `${this.value}%`
        fitext( [HANDLEABLE], WIDEABLE.checked )
    }

    function handleHeight() {
        HEIGHT_OUTPUT.value = HANDLEABLE.style.height = `${this.value}%`
        fitext( [HANDLEABLE], WIDEABLE.checked )
    }

    function reset() {
        WIDTH_OUTPUT.value = HANDLEABLE.style.width = `${INITIAL_VALUES[0]}%`
        HEIGHT_OUTPUT.value = HANDLEABLE.style.height = `${INITIAL_VALUES[1]}%`
        WIDTH.value = INITIAL_VALUES[0]
        HEIGHT.value = INITIAL_VALUES[1]
        fitext( [HANDLEABLE], WIDEABLE.checked )
    }

    function handleWideable() {
        fitext( [HANDLEABLE], WIDEABLE.checked )
    }
}
