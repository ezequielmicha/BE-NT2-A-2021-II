import React from "react";

export default ({title, id, tag}) => {
    return (
        <span> {title} <span id={id}>{tag}</span></span>
    )
}