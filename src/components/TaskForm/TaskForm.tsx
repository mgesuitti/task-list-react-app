// TaskForm.tsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./TaskForm.module.scss";

interface TaskFormProps {
    onAddTask: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddTask(newTaskTitle);
        setNewTaskTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.taskForm}>
            <TextField
                label="Type a new task..."
                variant="outlined"
                size="small"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Add
            </Button>
        </form>
    );
};

export default TaskForm;
