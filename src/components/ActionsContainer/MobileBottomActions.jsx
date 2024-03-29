import { useContext } from "react";
import TodoModal from "../modals/TodoModal";
import { TodoContext } from "../../context";
import Swal from "sweetalert2";

const MobileBottomActions = () => {
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
      <TodoModal />
    </>
  );
};

export default MobileBottomActions;
