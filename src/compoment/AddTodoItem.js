import React from "react";
import ApiCaller from "../ApiCaller";
import { useRef } from "react";
export default function AddTodoItem(props) {
    const { todoItem, setTodoItem} = props;
    const inputRef = useRef(null)
    function handleAddItem() {
        setTodoItem((todoItem) => {
            console.log(inputRef.current.value)
            ApiCaller('items', 'POST', {
                name: inputRef.current.value,
                isDone: false
            }).then(res => {
                
            })
            inputRef.current.value = ''
            return [...todoItem]
        })
    }
    return (
        <div>
            <input ref={inputRef} className="input-add" type="text" placeholder="Enter name item"></input>
            <button className="btn-add" onClick={handleAddItem}>Enter</button>
        </div>
    )
}