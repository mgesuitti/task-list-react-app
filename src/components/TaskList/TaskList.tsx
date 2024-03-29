import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_TASK, GET_TASKS, MARK_TASK_COMPLETED } from '../../graphql/operations';
import TaskForm from '../TaskForm/TaskForm'; 
import TaskItem from '../TaskItem/TaskItem';
import { Task } from '../../models/task';
import { Typography } from '@mui/material';
import styles from './TaskList.module.scss';

const TaskList = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [markTaskCompleted] = useMutation(MARK_TASK_COMPLETED);
  const [addTask] = useMutation(ADD_TASK);

  const handleMarkTaskCompleted = async (id: string) => {
    await markTaskCompleted({ variables: { id }, refetchQueries: [{ query: GET_TASKS }] });
  };

  const handleAddTask = async (title: string) => {
    if (!title.trim()) return;
    await addTask({ variables: { title }, refetchQueries: [{ query: GET_TASKS }] });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  if (!data || !data.allTasks) return <p>No tasks found!</p>; 

  return (
    <div className={styles.taskList}>
      <Typography component="h1" variant="h5">
        Task List
      </Typography>
      <TaskForm onAddTask={handleAddTask} />
      <ul>
        {data && data.allTasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} onMarkCompleted={handleMarkTaskCompleted} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;