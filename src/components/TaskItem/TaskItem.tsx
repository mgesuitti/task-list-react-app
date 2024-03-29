// TaskItem.tsx
import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import styles from "./TaskItem.module.scss";
import { Task } from "../../models/task";

interface TaskItemProps {
    task: Task;
    onMarkCompleted: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onMarkCompleted }) => {
    const handleToggle = () => {
        onMarkCompleted(task.id);
    };

    return (
        <ListItem className={styles.taskItem} dense>
            <Checkbox edge="start" checked={task.completed} onChange={handleToggle} tabIndex={-1} disableRipple />
            <ListItemText id={`checkbox-list-label-${task.id}`} primary={task.title} />
        </ListItem>
    );
};

export default TaskItem;
