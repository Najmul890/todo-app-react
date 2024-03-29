import { useContext } from "react";
import EditIcon from "../icons/EditIcon";
import TickIcon from "../icons/Tick";
import DeleteIcon from "../icons/Trash";
import { TodoContext } from "../../context";
import TodoModal from "../modals/TodoModal";
import Swal from "sweetalert2";
import NotFound from "../NotFound";

const TodoListContainer = () => {
  const {
    state,
    filteredTodos,
    dispatch,
    showTodoModal,
    setShowTodoModal,
    setTodoAdd,
    selectedTodoToEdit,
    setSelectedTodoToEdit,
  } = useContext(TodoContext);

  const handleDeleteATodo = (id) => {
    // before deleting a todo , confirm from user , if confirmed then perform delete action and show the success alert
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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully deleted the todo!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className={`mt-10 mb-[80px] ${showTodoModal?"hidden":"block"} sm:mb-0 border-none 2md:border border-primary rounded-lg p-0 2md:p-5 `}>
      {filteredTodos.length === 0 ? (
        <NotFound>
          {state.todos.length === 0
            ? "Todo List is empty!"
            : "Opps! No Todos found!"}
        </NotFound>
      ) : (
        <>
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
          {filteredTodos
            .slice()
            .reverse()
            .map((todo) => (
              <div
                key={todo.id}
                className="mt-4 hidden 2md:flex border-b py-5 border-b-primary text-primary text-sm font-medium "
              >
                <div className="basis-[4%] flex justify-center">
                  <TickIcon
                    id={todo.id}
                    status={todo.status}
                    dispatch={dispatch}
                  />
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
                  {todo.status === "incomplete" && (
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
                  )}
                  <div
                    onClick={() => handleDeleteATodo(todo.id)}
                    className="cursor-pointer"
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            ))}

          {/* table content for smaller devices */}
          <div className="grid 2md:hidden gap-4 grid-cols-1 sm:grid-cols-2 ">
            {filteredTodos
              .slice()
              .reverse()
              .map((todo) => (
                <div
                  key={todo.id}
                  className=" flex flex-col gap-3 border rounded-lg p-5 border-primary text-primary text-sm font-medium "
                >
                  <div className="flex items-center justify-between ">
                    <span className="text-lg">{todo.title}</span>
                    <TickIcon
                      id={todo.id}
                      status={todo.status}
                      dispatch={dispatch}
                    />
                  </div>

                  <div className="">{todo.description}</div>
                  <div className="">
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
                  <div className="flex justify-between mt-4 items-center gap-2">
                    <div
                      className={`inline-block px-3 py-1 text-white ${
                        todo.status === "complete" ? "bg-success" : "bg-danger"
                      } rounded-[10px]`}
                    >
                      {todo.status}
                    </div>
                    <div className="flex gap-2 ">
                      {todo.status === "incomplete" && (
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
                      )}
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
        </>
      )}
      {/* if edit btn clicked in a todo item by a user then the todo modal will be open with a form to perform edit the todo */}
      <TodoModal selectedTodoToEdit={selectedTodoToEdit} />
    </div>
  );
};

export default TodoListContainer;
