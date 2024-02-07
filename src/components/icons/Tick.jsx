/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";

const TickIcon = ({ status }) => {
  return (
    <div
      className={`w-5 h-5 rounded-full flex justify-center items-center ${
        status === "complete" ? "bg-success" : "bg-danger"
      } `}
    >
      <TiTick className="text-white" />
    </div>
  );
};

export default TickIcon;
