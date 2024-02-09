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
    // before deleting all todos , confirm from user , if confirmed then perform delete action and show the success alert
    Swal.fire({
      title: "Are you sure? want to delete all this todos?",
      showCancelButton: true,
      cancelButtonText: "Yes",
      reverseButtons: true,
      confirmButtonText: "No",
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        dispatch({
          type: "DELETE_ALL_TODO",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully deleted all the todos!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // counting number of completed todos via reduce method
  const completedTodos = state.todos.reduce((numberOfCompletedTodos, todo) => {
    return todo.status === "complete"
      ? numberOfCompletedTodos + 1
      : numberOfCompletedTodos;
  }, 0);

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
          Completed: {completedTodos}
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between mt-5 sm:mt-[60px]">
        <SearchTodo />
        <FilterTodo />
      </div>
      {/* if add todo btn clicked by a user then the todo modal will be open with a form to perform add a todo */}
      <TodoModal />
    </div>
  );
};

export default ActionsContainer;
