/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";

const TickIcon = ({ status }) => {
  return (
    <div
      title={
        status === "complete"
          ? "Click to mark as incomplete"
          : "Click to mark as complete"
      }
      className={`w-5 h-5 cursor-pointer rounded-full flex justify-center items-center ${
        status === "complete" ? "bg-success" : "border border-primary "
      } `}
    >
      <TiTick
        className={` text-lg ${
          status === "complete" ? "text-white" : "text-primary"
        }`}
      />
    </div>
  );
};

export default TickIcon;
