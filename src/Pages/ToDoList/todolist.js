import React from 'react';
import { useState , useEffect , useRef } from 'react';
import './todolist.css';

export const ToDoList = () => {
    
    const getLocalItem = () =>{
        let list = localStorage.getItem("lists");
        if(list){
            return JSON.parse(list);
        }
        else{
            return [];
        }
    }

    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState(getLocalItem);
    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState("");    
    
    
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    
    const keyDownAdd = (event) => {
        if (event.key === 'Enter') {     // if enter key is pressed
            addItem()
        }
    }
 
    
    function addItem(){
        if(!newItem){
            alert("Please Enter a task");
            return;
        }
        const item={
            id: Math.floor(Math.random()*1000),
            value: newItem,
        }
        setItems(oldList => [...oldList, item]);
        setNewItem("");
    }

    
    function deleteItem(id){
        const newArray = items.filter((item)=> item.id !==id);
        setItems(newArray);
    }

    
    function deleteAll(){
        alert("Are you sure to delete all tasks")
        setItems([]);
    }
    
    
    function editItem(id, newText){
        const currentItem = items.filter((item) => item.id===id);
        const newItem = {
            id: currentItem.id,
            value: newText,
        }
        deleteItem(id);
        setItems((oldList)=>[...oldList, newItem]);
        setUpdatedText("");
        setShowEdit(-1);
    }
   
    useEffect(()=>{
        localStorage.setItem("lists", JSON.stringify(items))
    }, [items]);

    return (
        <div id="todo-container">          
            <div align="center">
                <input type="text"
                className="inputField"
                placeholder='Add a task'
                value={newItem}
                onChange={(e)=> setNewItem(e.target.value)}
                ref={inputRef}
                onKeyDown={keyDownAdd}
                />
            </div>
            <div id="main-btn">
                <button className="btn" onClick={() => addItem()}>Add Task</button>
                <button className="btn" onClick={()=> deleteAll()}>Delete All</button>
            </div>           

            <div id="item-list">
                <table> 
                    {  items.length>0 ? 
                        <tr>
                            <td className='list-header' > Index </td>
                            <td className='list-header'> Task </td>
                            <td className='list-header'> Action </td>
                        </tr> 
                     : " "
                    }                
                                     
                    {
                        items.map((item,index) => { 
                            return (                                
                                <tr>                               
                                    <td> {index+1} </td>
                                    <td className="listing" key={item.id} onClick={() =>setShowEdit(item.id)} > {item.value}    
                                        {showEdit === item.id ? (
                                            <div>
                                                <input type="text"                                              
                                                class="updateField"
                                                value={updatedText}
                                                onChange={(e)=> setUpdatedText(e.target.value)}                                               
                                                />
                                                <button className="list-btn" onClick={() => editItem(item.id, updatedText)}> Update Task </button>
                                            </div>
                                        ): null} 
                                    </td>
                                    <td> 
                                         <button className="list-btn" onClick={() => deleteItem(item.id)}> ⊗ Remove Task </button>                                
                                    </td>                                                                 
                                </tr>                                
                            )
                        })
                    }                   
                </table>
            </div>
        </div>
    )
}