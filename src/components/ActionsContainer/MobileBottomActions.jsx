const MobileBottomActions = () => {
  return (
    <div className=" fixed bottom-0 bg-white w-full p-5 z-10 border-t  sm:hidden font-medium text-base ">
      <div className="flex items-center gap-5 justify-center ">
        <button className="btn btn-sm btn-primary">Add Todo</button>
        <button className="btn btn-sm bg-danger text-white hover:bg-danger ">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default MobileBottomActions;
