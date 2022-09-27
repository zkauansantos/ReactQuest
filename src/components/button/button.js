import React from "react"




const Button = ({label}) => {
    return (
        <button onClick={() => showButtonLabel(label)}>{label}</button>
    )
}

function showButtonLabel (label) {
    alert(`A label desse botão é ${label}`)
}

export default Button