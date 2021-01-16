import React from 'react'

export default function Button({onClick , ButtonName}) {
    return (
        <button 
        style ={{padding : "20px", alignSelf : "center",backgroundColor : "white",width : "80%", boxShadow : "10px 10px 5px 0px rgba(0,0,0,0.75);"}}
        type = "button" 
        onClick ={onClick}>
            {ButtonName} 
        </button>
    )
}
