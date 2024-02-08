import { useContext } from "react";
import { TodoContext } from "../../context";

const FilterTodo = () => {
  const {
    state,
    priorityFilterValue,
    setPriorityFilterValue,
    statusFilterValue,
    setStatusFilterValue,
  } = useContext(TodoContext);
  return (
    <div className="flex gap-4 mt-4 sm:mt-0 font-semibold ">
      <select
        disabled={state.todos.length === 0}
        onChange={(e) => setStatusFilterValue(e.target.value)}
        className="select w-full select-bordered text-primary focus:outline-none border-primary"
      >
        <option selected={statusFilterValue === ""} value="">
          All
        </option>
        <option selected={statusFilterValue === "complete"} value="complete">
          Complete
        </option>
        <option
          selected={statusFilterValue === "incomplete"}
          value="incomplete"
        >
          Incomplete
        </option>
      </select>
      <select
        disabled={state.todos.length === 0}
        onChange={(e) => setPriorityFilterValue(e.target.value)}
        className="select w-full select-bordered text-primary focus:outline-none border-primary"
      >
        <option selected={priorityFilterValue === ""} value="">
          Priority
        </option>
        <option selected={priorityFilterValue === "high"} value="high">
          High
        </option>
        <option selected={priorityFilterValue === "medium"} value="medium">
          Medium
        </option>
        <option selected={priorityFilterValue === "low"} value="low">
          Low
        </option>
      </select>
    </div>
  );
};

export default FilterTodo;
