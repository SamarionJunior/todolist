// import './App.css';

import Button, { constructorButton } from "../components/Button"
import Icon, { constructorIcon } from "../components/Icon"
import Input, {constructorInput} from "../components/Input"

const Form = ({newItem, setNewItem, setItems, inputRefNewItem, items}) => {

  const handlerNewItem = (event) => {
    const value = event.target.value
    const valueString = String(value)
    setNewItem(valueString)
  }

  const handlerButtonAdd = e => {
    e.preventDefault()
    if(newItem !== null && newItem !== "" && typeof(newItem) === "string"){

      const auxNewItem = {
        id: Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000).toString(),
        title: newItem,
        selected: false,
        createAt: new Date()
      }

      setItems(oldList => [...oldList , auxNewItem])

      setNewItem("")
    }

    if(inputRefNewItem.current !== null){
      inputRefNewItem.current.focus()
    }

    // console.log(items)
  }

  const handlerKeyDownButtonAdd = (event) => {
    if (event.key === 'Enter') {
      handlerButtonAdd(event)
    }
  }

  // console.log(inputRefNewItem)

  const propsInput = constructorInput({
    type: "text",
    value: newItem,
    onChange: handlerNewItem,
    onKeyDown: handlerKeyDownButtonAdd,
    autoFocus: "autofocus",
    className: "form-control Input",
    placeholder: "Type new item",
    ref: inputRefNewItem
  }, {})

  const propsButton = constructorButton(null, {
    onClick: handlerButtonAdd,
    type: "button",
    className: "btn btn-outline-primary mx-2 Button"
  })

  const propsIcon = constructorIcon({
    className: "fa-solid fa-plus"
  })

  return (
    <div className="row justify-content-center mb-3">
      <div className="col-12 col-lg-8 col-xxl-6 d-flex">
        <div className='flex-grow-1 mx-2'>
          <Input {...propsInput}/>
        </div>
        <Button {...propsButton}>
          <Icon {...propsIcon}/>
        </Button>
      </div>
    </div>
  )

}

export default Form;

{/* <i className="fa-solid fa-plus"></i> */}
