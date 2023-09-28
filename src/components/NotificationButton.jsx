import React from "react"

const NotificationButton = ({displayCloseBtn, handleClick}) =>{
    // variable qui permet de définir un etat du composant
    return displayCloseBtn ?(
        <button className="delete" onClick={handleClick}></button>
    ) : null
}

export default NotificationButton