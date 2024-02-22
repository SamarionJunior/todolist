// import './App.css';

import { Fragment } from "react";

export const constructorText = (text = null, attr = {}) => ({
    text: text,
    attr: attr
})

const Text = (props) => {
  
    return (
        // <p {...props.attr}>
        //     {props.text}
        // </p>
        <p {...props.attr}>
            {props.text}
        </p>
    )
  
}
  
export default Text;