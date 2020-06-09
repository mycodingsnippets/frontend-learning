import React from 'react'
import Greet from './../components/intro/Greet' //if exported as default, we can used Custom Names to import
import Welcome from './../components/intro/Welcome'
import Hello from './../components/intro/Hello'
import Message from './../components/intro/Message'

function Intro(){
    return (

        <div>
            <Greet name="Aditya" surname="Bansal">
                <p>You are special</p>
            </Greet>
            
            <Welcome name="Aditya" surname="Bansal"/>
            
            <Hello />
            
            <Message />
        </div>
    )
}

export default Intro