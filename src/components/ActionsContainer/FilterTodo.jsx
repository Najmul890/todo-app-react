import { useContext } from "react";
import { TodoContext } from "../../context";

const FilterTodo = () => {
  const { setPriorityFilterValue, setStatusFilterValue } = useContext(TodoContext);
  return (
    <div className="flex gap-4 mt-4 sm:mt-0 font-semibold ">
      <select onChange={(e)=>setStatusFilterValue(e.target.value)} className="select w-full select-bordered text-primary focus:outline-none border-primary">
        <option value="" >All</option>
        <option value="complete" >Complete</option>
        <option value="incomplete" >Incomplete</option>
      </select>
      <select onChange={(e)=>setPriorityFilterValue(e.target.value)} className="select w-full select-bordered text-primary focus:outline-none border-primary">
        <option value="">
          Priority
        </option>
        <option value="high" >High</option>
        <option value="medium" >Medium</option>
        <option value="low" >Low</option>
      </select>
    </div>
  );
};

export default FilterTodo;
