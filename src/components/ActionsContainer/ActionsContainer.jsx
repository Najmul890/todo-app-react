import { useContext } from "react";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import { TodoContext } from "../../context";
import TodoModal from "../modals/TodoModal";
import Swal from "sweetalert2";

const ActionsContainer = () => {
  const { state, setShowTodoModal, setTodoAdd, dispatch } =
    useContext(TodoContext);

  const handleDeleteAllTodo = () => {
    Swal.fire({
      title: "Are you sure? want to delete all this todo?",
      showCancelButton: true,
      cancelButtonText: "Yes",
      reverseButtons: true,
      confirmButtonText: "No",
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        dispatch({
          type: "DELETE_ALL_TODO",
        });
      }
    });
  };

  const completedTodos = state.todos.filter((todo)=>todo.status==="complete");

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center  ">
        <h2 className="text-3xl sm:text-4xl 2md:text-5xl font-semibold text-primary ">
          Todo Management
        </h2>
        <div className=" hidden sm:flex ml-auto mt-8 sm:mt-3 gap-2 sm:gap-5 font-medium text-base ">
          <button
            onClick={() => {
              setTodoAdd(true);
              setShowTodoModal(true);
            }}
            className="btn btn-sm btn-primary"
          >
            Add Todo
          </button>
          {state.todos.length > 1 && (
            <button
              onClick={handleDeleteAllTodo}
              className="btn btn-sm bg-danger text-white hover:bg-danger "
            >
              Delete All
            </button>
          )}
        </div>
      </div>
      <div className=" mt-4 flex justify-end gap-4 ">
        <div className="bg-light rounded-full px-3 py-0.5 text-white text-sm font-semibold ">
          Total: {state.todos.length}
        </div>
        <div className="bg-success rounded-full px-3 py-0.5 text-white text-sm font-semibold ">
          Completed: {completedTodos.length}
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between mt-5 sm:mt-[60px]">
        <SearchTodo />
        <FilterTodo />
      </div>
      <TodoModal />
    </div>
  );
};

export default ActionsContainer;
