import React from "react";

export default ({className, callback, tag}) => {
    return (
        <button className={className} onClick={() => callback()} > {tag} </button>
    )
    
}