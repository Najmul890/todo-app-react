import { useContext } from "react";
import { TodoContext } from "../../context";

const SearchTodo = () => {
  const { setSearchParams } = useContext(TodoContext);

  return (
    <div className="form-control w-full sm:w-1/2 ">
      <input
        onChange={(e) => setSearchParams(e.target.value)}
        type="text"
        placeholder="Search…"
        className="input w-full text-primary focus:outline-none border border-primary "
      />
    </div>
  );
};

export default SearchTodo;
