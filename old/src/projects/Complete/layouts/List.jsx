// import './App.css';

import Button, { constructorButton } from '../components/Button';
import Text, { constructorText } from '../components/Text';
import Task from '../components/Task';
import Icon, { constructorIcon } from '../components/Icon';
import Input, { constructorInput } from '../components/Input';
import Label, { constructorLabel } from '../components/Label';


const List = ({ items, setItems}) => {

    const handlerButtonMarcar = (id, event = null) => {
        console.log("dasdfsdfdfdf")
        const newUpdatedItems = items.map(item => {
            if(item.id === id){
                item.selected = !item.selected
                // console.log(item.selected)
            }
            return item
        })
        setItems(newUpdatedItems)
    }

    const handlerCheckBoxMarcar = (checked = null, event) => {
        console.log(checked)
        if(event.target.type === "checkbox"){
            // console.log(!event.target.checked)
            event.target.checked = checked
        }
    }

    const handlerButtonRemover = (id, event = null) => {
        const newUpdatedItems = items.filter(item => {
            if(item.id === id){
                item = null
            }
            return item
        })
        setItems(newUpdatedItems)
    }

    const handlerClass = (value, className) => value ? className : null

    const propComparator = (props) => {

        const comparator = (itemA, itemB) => {

        for(const key in props){
            const prop = props[key]

            if(itemA[prop] > itemB[prop]){
            return 1
            }

            if(itemA[prop] < itemB[prop]){
            return -1
            }

        }

        return 0;

        }

        return comparator

    }

    const propEventHandle = (value, callback) => {

        const eventHandle = (event) => {

            if(event.target.type !== "checkbox"){
                event.preventDefault()
            }

            return callback(value, event)
        }

        return eventHandle

    }

    const propsList = ["selected", "createAt"]

    const listOfTasksSorted = items.sort(propComparator(propsList))

    const renderedTasksList = listOfTasksSorted.map(item => {

        const itemId = item.id
        const itemTitle = item.title
        // const itemTitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        const itemSelected = item.selected

        const propsInputMarcar = constructorInput({
            onClick: propEventHandle(itemId, handlerButtonMarcar),
            // onClick: propEventHandle(itemSelected, handlerCheckBoxMarcar),
            type: "checkbox",
            // checked: itemSelected,
            className: "form-check-input mt-075",
            id: "checkbox" + itemId
        })
        
        const propText = constructorText(itemTitle, {
            // className:`${handlerClass(itemSelected, "cortado")} lead align-middle my-auto`
            className:`${handlerClass(itemSelected, "cortado")} m-0 p-0`
        })

        const propsButtonRemover = constructorButton(null, {
            onClick: propEventHandle(itemId, handlerButtonRemover),
            className: "btn btn-outline-danger"
        })

        const propsButtonIcon = constructorIcon({
            className: "fa-solid fa-trash"
        })
        
        const propsLabel = constructorLabel({
            htmlFor: "checkbox" + itemId
        })

        return (
            <Task key={itemId}>
                <Label {...propsLabel}>
                    {/* <input {...propsInputMarcar.attr} /> */}
                    <Input {...propsInputMarcar}/>
                </Label>
                <Text {...propText}/>
                <Button {...propsButtonRemover}>
                    <Icon {...propsButtonIcon}/>
                </Button>
            </Task>
        )
    })

    return (
        <div className="row justify-content-center flex-grow-1 overflow-auto scrollable-content">
          <div className="col-12 col-lg-8 col-xxl-6">
            <table className="table">
              <tbody className="">
                {renderedTasksList}
              </tbody>
            </table>
          </div>
        </div>
    );

}

export default List;
