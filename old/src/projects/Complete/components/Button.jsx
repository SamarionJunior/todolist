// import './App.css';

export const constructorButton = (text = null, attr = {}) => ({
    text: text,
    attr: attr
})

const Button = (props) => {
  
    return (
        <button {...props.attr}>
            {props.text}
            {props.children}
        </button>
    )
  
}
  
export default Button;
  