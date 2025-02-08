/* eslint-disable react/prop-types */
import Checked from "../assets/checked.png";
import Delete from "../assets/delete.png";
import Minus from "../assets/minus.png"

const Block = ({ title, note, date, onDelete,isComplete, checked }) => {
  // Receive date as a prop
  const formattedDate = date.toLocaleDateString(); // Format the date

  return (
    <div
      className={`rounded-md p-4 w-full md:w-80 flex flex-col gap-3 bg-orange-300 mt-4`}
    >
      <button onClick={() => isComplete(title)} className={`flex flex-row  justify-between md:items-center items-start gap-2 `}>
        <h1 className={`text-lg font-medium ${checked ? 'line-through' : ""}`}>{title}</h1>
        <img src={checked ? Checked : Minus} className={`w-5 cursor-pointer`} alt={"check"} />
      </button>
      <div
        className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-2`}
      >
        <p className={`text-sm md:text-base ${checked ? 'line-through' : ""}`}>{note}</p>
       
      </div>
      <button
        onClick={() => onDelete(title)}
        className={`flex flex-row justify-between items-start gap-2`}
      >
        <p className="text-sm md:text-base">Start Date: {formattedDate}</p>
        <img src={Delete} className={`w-5 cursor-pointer`} alt={"delete"} />
      </button>
    </div>
  );
};

export default Block;
