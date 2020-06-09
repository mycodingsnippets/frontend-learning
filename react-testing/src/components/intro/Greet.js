import React from 'react';

// function Greet(){
//     return <h1>Greet Aditya</h1>
// }

const Greet = (props) => {
    console.log(props)
    return( 
        <div>
            <h1>Greeting {props.name} {props.surname}</h1>
            {props.children}
        </div>
    )
}

export default Greet