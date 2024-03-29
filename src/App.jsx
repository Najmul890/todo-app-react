import { useReducer, useState } from "react";
import ActionsContainer from "./components/ActionsContainer/ActionsContainer";
import MobileBottomActions from "./components/ActionsContainer/MobileBottomActions";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { initialState, todoReducer } from "./reducers/TodoReducer";
import { TodoContext } from "./context";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoAdd, setTodoAdd] = useState(true);
  const [selectedTodoToEdit, setSelectedTodoToEdit] = useState(null);
  const [showTodoModal, setShowTodoModal] = useState(false);
  const [priorityFilterValue, setPriorityFilterValue] = useState("");
  const [statusFilterValue, setStatusFilterValue] = useState("");
  const [searchParams, setSearchParams] = useState("");

  // todos of initial state is set as filtered todos initially
  let filteredTodos = [...state.todos];

  // filtering todos via search params
  filteredTodos = state.todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchParams.toLowerCase())
  );

  // filtering todos via todo priority
  if (priorityFilterValue) {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.priority === priorityFilterValue
    );
  }

  // filtering todos via todo status
  if (statusFilterValue) {
    filteredTodos = filteredTodos.filter(
      (todo) => todo.status === statusFilterValue
    );
  }

  const value = {
    state,
    filteredTodos,
    dispatch,
    todoAdd,
    setTodoAdd,
    showTodoModal,
    setShowTodoModal,
    selectedTodoToEdit,
    setSelectedTodoToEdit,
    searchParams,
    setSearchParams,
    priorityFilterValue,
    setPriorityFilterValue,
    setStatusFilterValue,
    statusFilterValue,
  };

  return (
    <TodoContext.Provider value={value}>
      <div className=" min-h-screen py-0 sm:py-5 flex justify-center items-center ">
        <div className=" bg-white min-h-screen sm:min-h-[500px] shadow-lg w-full sm:w-[96%] xl:w-3/4 rounded-lg py-10 px-6 xl:px-10 m-auto ">
          <ActionsContainer />
          <TodoListContainer />
        </div>
        <MobileBottomActions />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
