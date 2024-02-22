// import './App.css';

export const constructorLabel = (attr = {}) => ({
    attr: attr
})

const Label = (props) => {

    const attr = props.attr

    // console.log(props.attr.checked)

    // console.log(reference)
  
    return (
        <label {...attr}>
            {props.children}
        </label>
    )
  
}
  
export default Label;
  