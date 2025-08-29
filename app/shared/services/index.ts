import { Todo } from "../entities/Todo";

const todos = [
  {
    id: 1,
    title: "Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    completed: false,
  },
];

export const fetchTodos = async (query = ""): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("fetched todos");
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );
  return [...filteredTodos];
};

export const addTodo = async (todo: Pick<Todo, "title">): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("added todo");
  const newTodo = {
    id: todos.length + 1,
    title: todo.title,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};
