import { useContext, useState } from "react";
import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";
import { TodoContext } from "../../context";
import TodoModal from "../modals/TodoModal";

const ActionsContainer = () => {
  const { state, todoAdd, showTodoModal, setShowTodoModal, setTodoAdd } =
    useContext(TodoContext);

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
          <button className="btn btn-sm bg-danger text-white hover:bg-danger ">
            Delete All
          </button>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between mt-5 sm:mt-[60px]">
        <SearchTodo />
        <FilterTodo />
      </div>
      {/* <AddOrEditModal /> */}
      <TodoModal />
    </div>
  );
};

export default ActionsContainer;
