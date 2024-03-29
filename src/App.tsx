import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import TaskListPage from "./pages/TaskListPage";

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <TaskListPage />
            </div>
            <footer>
                A simple React application using TypeScript that displays a list of tasks fetched from a mock GraphQL
                server
            </footer>
        </ApolloProvider>
    );
}

export default App;
