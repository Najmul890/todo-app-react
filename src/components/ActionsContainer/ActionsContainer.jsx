import FilterTodo from "./FilterTodo";
import SearchTodo from "./SearchTodo";

const ActionsContainer = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center  ">
        <h2 className="text-3xl sm:text-4xl 2md:text-5xl font-semibold text-primary ">
          Todo Management
        </h2>
        <div className=" hidden sm:flex ml-auto mt-8 sm:mt-3 2md:mt-1 gap-2 sm:gap-5 font-medium text-base ">
          <button className="btn btn-sm btn-primary">Add Todo</button>
          <button className="btn btn-sm bg-danger text-white hover:bg-danger ">
            Delete All
          </button>
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-between mt-5 sm:mt-[60px]">
        <SearchTodo />
        <FilterTodo />
      </div>
    </div>
  );
};

export default ActionsContainer;
