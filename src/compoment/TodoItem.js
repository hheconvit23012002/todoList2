import React, { useEffect } from "react";
import ApiCaller from "../ApiCaller";
export default function TodoItem(props) {
    const { todoItem, setTodoItem,status, setStatus, itemEdit,setItemEdit } = props;
    useEffect(() => {
        ApiCaller('items', 'GET', null).then(res => {
            setTodoItem(() => res.data)
        })
    }, [])
    // hỏi anh tại sao console.log('a') lai ko ra lan dau o day
    // tai sao an 2 lan nut check thi no ko thay doi luc ko xem con lai thi ok
    function handleClick(item) {
        setTodoItem(items => {
            ApiCaller(`items/${item.id}`, 'PUT', {
                isDone: !item.isDone
            })
            return items.map((value) => {
                return value.id === item.id ? { ...value, isDone: !value.isDone } : value
            })
        })
    }
    function handleDelete(id) {
        setTodoItem((items) => {
            if (confirm('Bạn chắc chắn muốn xóa chứ ?')) { // eslint-disable-line
                ApiCaller(`items/${id}`, 'Delete', null)
                return items.filter(function (value) {
                    return value.id !== id;
                })
            }
        })
    }

    function handleEdit(item){
        setStatus(() => "Quay lại")
        setItemEdit(() => item)
    }
    return (
        <div>
            {
                todoItem.map(function (value) {
                    return (
                        <div key={value.id} className="item">
                            <div className="header-item">
                                <input type="checkbox" className="input-item" defaultChecked={value.isDone} onChange={() => handleClick(value)}></input>

                                <div className="name-item" style={{ textDecoration: value.isDone ? "line-through" : null }}>{value.name}</div>
                            </div>
                            <div>
                                <button className="btn-edit" onClick={()=> handleEdit(value)}>
                                    sửa
                                </button>
                                <button className="bin" onClick={() => handleDelete(value.id)}>
                                    xóa
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}