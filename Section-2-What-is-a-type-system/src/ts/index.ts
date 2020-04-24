import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    // We can ignore properties
    // "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}

axios.get(url)
    .then(response => {
        // const myData: Todo = response.data;
        // We have to options, how the type define
        const myData = response.data as Todo;

        const id: number = myData.id;
        const title: string = myData.title;
        const completed: boolean = myData.completed;

        logTodo(id, title, completed);
    });

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
            id = ${id},
            title = ${title},
            completed = ${completed}
        `);
};
