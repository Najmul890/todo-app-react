const initialState = {
  todos: [
    {
      id: crypto.randomUUID(),
      title: "Todo One",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      created_at: "24th January 2024",
      priority: "high",
      isComplete: false,
    },
  ],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), isFavorite: false, ...action.payload },
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
            return { ...todo, isFavorite: !todo.isFavorite };
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
