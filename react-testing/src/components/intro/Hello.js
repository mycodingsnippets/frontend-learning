import React from 'react'

const Hello = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            {id: 'hello', className: 'dummyClass'},
            'Hello is presented'
        )
    )
}

export default Hello