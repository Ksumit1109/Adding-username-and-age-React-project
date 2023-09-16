import React from "react";

const Button = (props) => {
    return (
        <button type="submit" className="btn btn-primary mb-1" onClick={props.onClick}>Submit</button>
        )
}

export default Button;