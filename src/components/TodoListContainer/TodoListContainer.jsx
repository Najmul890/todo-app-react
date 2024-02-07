import EditIcon from "../icons/EditIcon";
import TickIcon from "../icons/Tick";
import DeleteIcon from "../icons/Trash";

const TodoListContainer = () => {
  return (
    <div className="mt-10 mb-[80px] sm:mb-0 border-none 2md:border border-primary rounded-lg p-0 2md:p-5 ">
      {/* table heading (hidden for smaller screens) */}
      <div className="hidden 2md:flex text-primary text-lg font-semibold ">
        <div className="basis-[4%]"></div>
        <div className="basis-[16%]">Title</div>
        <div className="basis-[30%]">Description</div>
        <div className="basis-[30%]">Time Stamp</div>
        <div className="basis-[10%]">Status</div>
        <div className="basis-[10%] flex justify-end ">Action</div>
      </div>
      {/* table content for desktop */}
      <div className="mt-4 hidden 2md:flex border-b py-5 border-b-primary text-primary text-sm font-medium ">
        <div className="basis-[4%] flex justify-center  ">
          <TickIcon status="complete" />
        </div>
        <div className="basis-[16%] ">
          <span>Make a plan</span>
        </div>
        <div className="basis-[30%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="basis-[30%]">
          <span  >Created at 24th Jan 8.40pm</span> <br />
          <span  >Completed at 25th Jan 8.40pm</span> <br />
          <span className="text-success font-semibold " >Duration 1 day</span>
        </div>
        <div className="basis-[10%] flex justify-center items-center">
          <div className=" inline-block px-3 py-1 text-white bg-success rounded-[10px] ">
            Completed
          </div>
        </div>
        <div className="basis-[10%] flex items-center gap-2 justify-end ">
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>

      {/* table content for mobile */}
      <div className="grid 2md:hidden gap-4 grid-cols-1 sm:grid-cols-2 ">

        <div className=" flex flex-col gap-3 border rounded-lg p-5 border-primary text-primary text-sm font-medium ">
          <div className="flex items-center justify-between ">
            <span className="text-lg">Make a plan</span>
            <TickIcon status="complete" />
          </div>

          <div className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="">
            <span>Created at 24th Jan 8.40pm</span> <br />
            <span>Completed at 25th Jan 8.40pm</span> <br />
            <span className="text-success font-semibold " >Duration 1 day</span>
          </div>
          <div className="flex justify-between mt-4 items-center gap-2">
            <div className=" inline-block px-3 py-1 text-white bg-success rounded-[10px] ">
              Completed
            </div>
            <div className="flex gap-2 ">
              <EditIcon />
              <DeleteIcon />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TodoListContainer;
