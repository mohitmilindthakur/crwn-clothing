import React from "react";
import './custom-button.styles.scss';


const CustomButton = ({children, color, inverted, ...otherProps}) => {
    return (
        <button className={`custom-button ${color} ${inverted ? 'inverted' : ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;