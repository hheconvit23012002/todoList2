import React, { useEffect, useRef } from "react";
import ApiCaller from "../ApiCaller";

export default function EditTodoItem(props){
    const {itemEdit,setItemEdit} = props
    const inputRef =useRef(null)
    useEffect(()=>{
        inputRef.current.value = itemEdit.name
    },[])
    function handleEditItem(){
        console.log(itemEdit.name)
        ApiCaller(`items/${itemEdit.id}`,'PUT',{
            name:inputRef.current.value
        }).then(res => {
            alert("Thành Công!")
        }).catch(err => {
            alert("Thất Bại.")
        })
    }
    return (
        <div>
            <div>Chỉnh sửa phần tử có id = {itemEdit.id}</div>
            <input ref={inputRef} className="input-edit" type="text"></input>
            <button className="btn-enter-edit" onClick={handleEditItem}>Enter</button>
        </div>
    )
}