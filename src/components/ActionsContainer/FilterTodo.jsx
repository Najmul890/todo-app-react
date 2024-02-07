const FilterTodo = () => {
  return (
    <div className="flex gap-4 mt-4 sm:mt-0 font-semibold ">
      <select className="select w-full select-bordered text-primary focus:outline-none border-primary">
        <option>All</option>
        <option>Complete</option>
        <option>Incomplete</option>
      </select>
      <select className="select w-full select-bordered text-primary focus:outline-none border-primary">
        <option disabled selected>
          Priority
        </option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option> w-full
      </select>
    </div>
  );
};

export default FilterTodo;
