import { useRef, useState } from 'react';

import './App.css';

function Simplified() {

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const inputRefNewItem = useRef(null)

    const handlerNewItem = event => setNewItem(String(event.target.value))

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

    }

    const handlerKeyDownButtonAdd = (event) => {
        if (event.key === 'Enter') {
            handlerButtonAdd(event)
        }
    }

    const handlerButtonMarcar = (id) => {
        const newUpdatedItems = items.map(item => {
            if(item.id === id){
                item.selected = !item.selected
            }
            return item
        })
        setItems(newUpdatedItems)
    }

    const handlerButtonRemover = (id) => {
        const newUpdatedItems = items.filter(item => {
            if(item.id === id){
                item = null
            }
            return item
        })
        setItems(newUpdatedItems)
    }

    const handlerClass = (value, className) => value ? className : null

    const propComparator = (props) => (itemA, itemB) => {

        for(const key in props){
            const prop = props[key]

            if(itemA[prop] > itemB[prop]) return 1

            if(itemA[prop] < itemB[prop]) return -1

        }

        return 0;

    }

    const propEventHandle = (value, callback) => (event) => callback(value)

    const listOfTasksSorted = items.sort(propComparator(["selected", "createAt"]))

    const renderedTasksList = listOfTasksSorted.map(item => (
        <tr key={item.id}>
            <td>

                <label htmlFor={"checkbox" + item.id}>
                    <input onClick={propEventHandle(item.id, handlerButtonMarcar)} type="checkbox" className="form-check-input mt-075" id={"checkbox" + item.id}/>
                </label>

            </td>
            <td className='align-middle w-100'>

                <p className={`${handlerClass(item.selected, "cortado")} m-0 p-0`}>
                    {item.title}
                </p>

            </td>
            <td className='text-end'>

                <button onClick={propEventHandle(item.id, handlerButtonRemover)} className="btn btn-outline-danger">
                    <i className="fa-solid fa-trash"></i>
                </button>

            </td>
        </tr>
    ))

    return (
        <>
            <div className="row justify-content-center mb-3">
                <div className="col-12 col-lg-8 col-xxl-6 d-flex">
                    <div className='flex-grow-1 mx-2'>

                        <input
                            type={"text"}
                            value={newItem}
                            onChange={handlerNewItem}
                            onKeyDown={handlerKeyDownButtonAdd}
                            autoFocus={"autofocus"}
                            className={"form-control Input"}
                            placeholder={"Adicione uma nova tarefa!"}
                            ref={inputRefNewItem}
                        />

                    </div>
                    
                    <button onClick={handlerButtonAdd} type="button"className="btn btn-outline-primary mx-2 Button">
                        <i className="fa-solid fa-plus"/>
                    </button>

                </div>
            </div>

            <div className="row justify-content-center flex-grow-1 overflow-auto scrollable-content">
                <div className="col-12 col-lg-8 col-xxl-6">
                    <table className="table">
                        <tbody>

                            {renderedTasksList}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}

export default Simplified;