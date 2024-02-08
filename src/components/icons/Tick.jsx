/* eslint-disable react/prop-types */
import { TiTick } from "react-icons/ti";
import Swal from "sweetalert2";

const TickIcon = ({ id, status, dispatch }) => {
  const handleToggleComplete = () => {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: id,
    });
    Swal.fire({
      position: "center",
      icon: "success",
      title:
        status === "complete"
          ? "Todo has marked as incomplete successfully!"
          : "Todo has marked as complete successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div
      onClick={handleToggleComplete}
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
