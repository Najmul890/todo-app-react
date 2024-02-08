import { useContext } from "react";
import EditIcon from "../icons/EditIcon";
import TickIcon from "../icons/Tick";
import DeleteIcon from "../icons/Trash";
import { TodoContext } from "../../context";
import TodoModal from "../modals/TodoModal";
import Swal from "sweetalert2";

const TodoListContainer = () => {
  const {
    state,
    filteredTodos,
    dispatch,
    setShowTodoModal,
    setTodoAdd,
    selectedTodoToEdit,
    setSelectedTodoToEdit,
  } = useContext(TodoContext);

  const handleDeleteATodo = (id) => {
    Swal.fire({
      title: "Are you sure? want to delete this todo?",
      showCancelButton: true,
      cancelButtonText: "Yes",
      reverseButtons: true,
      confirmButtonText: "No",
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        dispatch({
          type: "DELETE_A_TODO",
          payload: id,
        });
      }
    });
  };


  return (
    <div className="mt-10 mb-[80px] sm:mb-0 border-none 2md:border border-primary rounded-lg p-0 2md:p-5 ">
      {/* table heading (hidden for smaller screens) */}
      <div className="hidden 2md:flex text-primary text-lg font-semibold ">
        <div className="basis-[4%]"></div>
        <div className="basis-[20%]">Title</div>
        <div className="basis-[40%]">Description</div>
        <div className="basis-[16%]">Priority</div>
        <div className="basis-[10%]">Status</div>
        <div className="basis-[10%] flex justify-end ">Action</div>
      </div>
      {/* table content for desktop */}
      {filteredTodos.map((todo) => (
        <div
          key={todo.id}
          className="mt-4 hidden 2md:flex border-b py-5 border-b-primary text-primary text-sm font-medium "
        >
          <div className="basis-[4%] flex justify-center  ">
            <TickIcon id={todo.id} status={todo.status} dispatch={dispatch} />
          </div>
          <div className="basis-[20%] ">
            <span>{todo.title}</span>
          </div>
          <div className="basis-[40%]">{todo.description}</div>
          <div className="basis-[16%] flex ml-5 lg:ml-3 xl:ml-2 items-center">
            <div
              className={`inline-block px-3 py-1 capitalize text-white ${
                todo.priority === "high"
                  ? "bg-success"
                  : todo.priority === "low"
                  ? "bg-danger"
                  : "bg-light"
              } capitalize rounded-[10px]`}
            >
              {todo.priority}
            </div>
          </div>
          <div className="basis-[10%] flex justify-center items-center">
            <div
              className={`inline-block px-3 py-1 capitalize text-white ${
                todo.status === "complete" ? "bg-success" : "bg-danger"
              } rounded-[10px]`}
            >
              {todo.status}
            </div>
          </div>
          <div className="basis-[10%] flex items-center gap-2 justify-end ">
            <div
              onClick={() => {
                setSelectedTodoToEdit(todo);
                setShowTodoModal(true);
                setTodoAdd(false);
              }}
              className="cursor-pointer"
            >
              <EditIcon />
            </div>
            <div
              onClick={() => handleDeleteATodo(todo.id)}
              className="cursor-pointer"
            >
              <DeleteIcon />
            </div>
          </div>
        </div>
      ))}

      {/* table content for mobile */}
      <div className="grid 2md:hidden gap-4 grid-cols-1 sm:grid-cols-2 ">
        {filteredTodos.map((todo) => (
          <div
            key={todo.id}
            className=" flex flex-col gap-3 border rounded-lg p-5 border-primary text-primary text-sm font-medium "
          >
            <div className="flex items-center justify-between ">
              <span className="text-lg">{todo.title}</span>
              <TickIcon id={todo.id} status={todo.status} dispatch={dispatch} />
            </div>

            <div className="">{todo.description}</div>
            <div className="">
              <span>Created at {todo.created_at}</span> <br />
            </div>
            <div className="flex justify-between mt-4 items-center gap-2">
              <div
                className={`inline-block px-3 py-1 text-white ${
                  todo.status === "complete" ? "bg-success" : "bg-danger"
                } rounded-[10px]`}
              >
                {todo.status}
              </div>
              <div className="flex gap-2 ">
                <div
                  onClick={() => {
                    setSelectedTodoToEdit(todo);
                    setShowTodoModal(true);
                    setTodoAdd(false);
                  }}
                  className="cursor-pointer"
                >
                  <EditIcon />
                </div>
                <div
                  onClick={() => handleDeleteATodo(todo.id)}
                  className="cursor-pointer"
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TodoModal selectedTodoToEdit={selectedTodoToEdit} />
    </div>
  );
};

export default TodoListContainer;
