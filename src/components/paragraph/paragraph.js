import React from 'react'

const Paragraph = ({textTransform, color}) => {
    return (
        <p style={{textTransform: textTransform,
                   color : color
        }}>Parágrafo colorido com letras maiúsculas</p>
    )
}

Paragraph.defaultProps = {
    textTransform: 'uppercase'
}

export default Paragraph