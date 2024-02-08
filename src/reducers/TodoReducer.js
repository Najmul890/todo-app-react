const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    {
      id: crypto.randomUUID(),
      title: "Todo One",
      description: "Lorem ipsum, dolor sit amet consectetur.",
      priority: "high",
      status: "incomplete",
    },
  ],
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todoReducer = (state, action) => {
  let updatedTodos;
  switch (action.type) {
    case "ADD_TODO":
      updatedTodos = [
        ...state.todos,
        { id: crypto.randomUUID(), status: "incomplete", ...action.payload },
      ];
      saveToLocalStorage(updatedTodos);
      return {
        todos: updatedTodos,
      };
    case "EDIT_TODO":
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      saveToLocalStorage(updatedTodos);
      return {
        todos: updatedTodos,
      };
    case "TOGGLE_COMPLETE":
      updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              status: todo.status === "complete" ? "incomplete" : "complete",
            }
          : todo
      );
      saveToLocalStorage(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    case "DELETE_A_TODO":
      updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
      saveToLocalStorage(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    case "DELETE_ALL_TODO":
      saveToLocalStorage([]);
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export { initialState, todoReducer };
