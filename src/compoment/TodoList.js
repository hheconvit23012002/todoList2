import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import AddTodoItem from "./AddTodoItem";
import EditTodoItem from "./EditTodoItem";
export default function () {
    const [todoItem, setTodoItem] = useState([])
    const [status, setStatus] = useState('Thêm Sản Phẩm')
    const [itemEdit, setItemEdit] = useState({})
    function handleTransferPage() {
        setStatus((status) => {
            if (status === 'Thêm Sản Phẩm') {
                return 'Trang Chủ'
            }
            else {
                return 'Thêm Sản Phẩm'
            }
        })
    }
    return (
        <div>
            <button onClick={handleTransferPage}>{status}</button>
            {
                (() => {
                    if (status === "Thêm Sản Phẩm") {
                        return (
                            <TodoItem
                                todoItem={todoItem}
                                setTodoItem={setTodoItem}
                                status = {status}
                                setStatus = {setStatus}
                                itemEdit={itemEdit}
                                setItemEdit={setItemEdit} />
                        )
                    } else if(status === "Trang Chủ"){
                        return <AddTodoItem
                            todoItem={todoItem}
                            setTodoItem={setTodoItem} />
                    } else{
                        return <EditTodoItem 
                            itemEdit = {itemEdit}
                            setItemEdit ={setItemEdit}
                        />
                    }
                })()
            }
        </div>
    )
}