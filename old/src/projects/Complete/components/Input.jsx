// import './App.css';

export const constructorInput = (attr = {}, anothers = {}) => ({
    attr: attr,
    ...anothers
})

const Input = (props) => {

    const attr = props.attr

    // console.log(props.attr.checked)

    // console.log(reference)
  
    return (
        <input {...attr} />
    )
  
}
  
export default Input;
  