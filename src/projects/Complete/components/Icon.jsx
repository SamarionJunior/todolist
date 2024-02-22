// import './App.css';

export const constructorIcon = (attr = {}) => ({
    attr: attr
})

const Icon = (props) => {

    const attr = props.attr
  
    return (
        <i {...attr}></i>
    )
  
}
  
export default Icon;
  