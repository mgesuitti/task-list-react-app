import { gql } from "@apollo/client";

export const GET_TASKS = gql`
    query GetTasks {
        allTasks {
            id
            title
            completed
        }
    }
`;

export const ADD_TASK = gql`
    mutation AddTask($title: String!) {
        createTask(title: $title, completed: false) {
            id
            title
            completed
        }
    }
`;

export const MARK_TASK_COMPLETED = gql`
    mutation MarkTaskCompleted($id: ID!) {
        updateTask(id: $id, completed: true) {
            id
            completed
        }
    }
`;
