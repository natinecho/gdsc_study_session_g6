import React, { useState } from 'react';
import './App.css';
const TodoList = () => {
    const [inputTask, setInputTask] = useState('');
    const [list, setList] = useState([]);

    const handleAddTodo = () => {
        const newTask = {
            id: Math.random(),
            todo: inputTask,
            status:true
           
        };
       setList([...list, newTask]);
        setInputTask('');
    };

   const handleDeleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    };

   const handleInputChange = (event) => {
        setInputTask(event.target.value);
    };
   return (
        <div className="Todo">
            <h1>My To-Do List</h1>

            <div className="Top">
                <input className="input" type="text" value={inputTask}
                   onChange={handleInputChange} placeholder="Enter a task" />

                <button className="btn" onClick={handleAddTodo}>ADD</button>
            </div>

           <ul className='ul'>
                { list.map((todo) => (
                    <li className="task" key={todo.id}>
                        <input type="checkbox" onClick={() =>li}></input>
                                 {todo.todo}
                        <button  className="button" onClick={() => handleDeleteTodo(todo.id)}>
                           x
                       </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

