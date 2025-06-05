// import './App.css';

import { Fragment, Children } from "react";

const Task = (props) => {
    // console.log(props.children)
  
    return (
        <tr>
            <td>
                {props.children[0]}
                {/* <input className='form-check-input mt-075' type="checkbox" /> */}
            </td>
            <td className='align-middle w-100'>
                {props.children[1]}
            </td>
            <td className='text-end'>
                {props.children[2]}
            </td>
        </tr>
    )
  
}
  
export default Task;

// {/* <form className='row mb-3 align-items-center Task'>
//     <div className="col-sm-2">
//     </div>
//     <div className="col-sm-8">
//     </div>
//     <div className="col-sm-2">
//     </div>
//     /* {Children.map(props.children, (child, index) => 
//         <div className="col-sm-4" key={index}>
//             {child}
//         </div>
//     )} */
// </form> */}