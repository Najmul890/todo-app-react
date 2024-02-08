/* eslint-disable react/prop-types */

const NotFound = ({ children }) => {
  return (
    <div className="mx-auto border border-primary p-5 text-red-600 text-lg font-semibold w-[90%] 2md:w-[40%] mt-[100px] 2md:mt-[40px] bg-white rounded-[30px] flex justify-center items-center ">
      {children}
    </div>
  );
};

export default NotFound;
