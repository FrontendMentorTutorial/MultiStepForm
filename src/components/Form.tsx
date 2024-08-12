import React, {useState} from "react";

const formStore = {
    'info' : {
        'name': '',
        'email': '',
        'phone': ''
    },
    'plan' : {
        'type' : '',
        'period' : '',
        'price' : 0
    },
    'adds-ons' : {
        'type': '',
        'price': 0
    }
}

function Form(){
    return (
        <div className="">
            <header>
                <h1></h1>
                <p></p>
            </header>
            <main></main>
            <footer></footer>
        </div>
    )
}

export default Form;