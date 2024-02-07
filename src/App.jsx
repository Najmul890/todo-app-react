import ActionsContainer from "./components/ActionsContainer/ActionsContainer";
import MobileBottomActions from "./components/ActionsContainer/MobileBottomActions";
import TodoListContainer from "./components/TodoListContainer/TodoListContainer";

function App() {
  return (
    <div className=" h-screen flex justify-center items-center ">
      <div className=" bg-white shadow-lg w-full sm:w-[96%] xl:w-3/4 rounded-lg py-10 px-6 xl:px-10 m-auto ">
        <ActionsContainer />
        <TodoListContainer />
      </div>
      <MobileBottomActions/>
    </div>
  );
}

export default App;
