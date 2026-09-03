import { useState } from "react";

export default function TaskManager() {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleAddTask = () => {
        if (taskText.trim() === "") return;
        setTasks([...tasks, taskText]);
        setTaskText("");
    };

    const handleDeleteTask = (indexToDelete) => {
        const filteredTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(filteredTasks);
    };

    return (
        <>
            <h1>To DO List</h1>
            
            <input 
                type="text" 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)} 
            />
            
            <button onClick={handleAddTask}>add task</button>
            
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}