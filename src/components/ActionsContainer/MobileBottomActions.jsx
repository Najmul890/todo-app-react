import { useContext } from "react";
import TodoModal from "../modals/TodoModal";
import { TodoContext } from "../../context";

const MobileBottomActions = () => {
  const { setShowTodoModal, setTodoAdd } = useContext(TodoContext);

  return (
    <>
      <div className=" fixed bottom-0 bg-white w-full p-5 z-10 border-t  sm:hidden font-medium text-base ">
        <div className="flex items-center gap-5 justify-center ">
          <button
            onClick={() => {
              setTodoAdd(true);
              setShowTodoModal(true);
            }}
            className="btn btn-sm btn-primary"
          >
            Add Todo
          </button>
          <button className="btn btn-sm bg-danger text-white hover:bg-danger ">
            Delete All
          </button>
        </div>
      </div>
      <TodoModal />
    </>
  );
};

export default MobileBottomActions;
