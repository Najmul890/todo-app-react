const initialState = {
  todos: [
    {
      id: crypto.randomUUID(),
      title: "Todo One",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      created_at: "8th February, 2024",
      priority: "high",
      status: "incomplete",
    },
  ],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), status: "incomplete", ...action.payload },
        ],
      };
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };

    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complete: todo.status === "complete" ? "incomplete" : "complete",
            };
          } else {
            return todo;
          }
        }),
      };
    case "DELETE_A_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "DELETE_ALL_TODO":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export { initialState, todoReducer };
