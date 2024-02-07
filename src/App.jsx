import { useReducer } from "react";
import ActionsContainer from "./components/ActionsContainer/ActionsContainer";
import MobileBottomActions from "./components/ActionsContainer/MobileBottomActions";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";
import { initialState, todoReducer } from "./reducers/TodoReducer";
import { TodoContext } from "./context";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className=" h-screen flex justify-center items-center ">
        <div className=" bg-white h-screen sm:h-auto shadow-lg w-full sm:w-[96%] xl:w-3/4 rounded-lg py-10 px-6 xl:px-10 m-auto ">
          <ActionsContainer />
          <TodoListContainer />
        </div>
        <MobileBottomActions />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
