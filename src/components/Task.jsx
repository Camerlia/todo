/* eslint-disable react/prop-types */
import Avatar from "../assets/avatar.jpg";

const Task = ({ completedTask,  details}) => {
  const noCheck = details.filter((detail)=> detail.checked === true);
  const pendingTask = details.filter((detail)=> detail.checked === false);
  const lengthPending = pendingTask?.length;
  const length = noCheck?.length;
  return (
    <div className={`flex flex-col md:flex-row gap-4 mt-8`}> 
      <div className={`rounded-2xl bg-orange-900 p-4 flex flex-col gap-6 text-center w-full md:w-auto`}> 
        <span className={`text-base font-semibold text-white`}>
          Completed Task
        </span>
        <h4 className={`text-xl font-bold text-white`}>{length}</h4>
      </div>
      <div className={`rounded-2xl bg-orange-600 p-4 flex flex-col gap-6 text-center w-full md:w-auto`}> 
        <span className={` text-base font-semibold text-white`}>
          Pending Task
        </span>
        <h4 className={`text-xl font-bold text-white`}>{lengthPending}</h4>
      </div>
      <div className={`flex flex-col md:flex-row justify-between items-center px-4 py-4 bg-white rounded-2xl w-full`}> 
        <div className={`flex flex-col gap-4 text-center w-full md:w-auto`}>
          <span className={`text-base font-semibold text-black`}>
            Task Created
          </span>
          <h4 className={`text-xl font-bold text-black`}>{details.length}</h4>
        </div>
        <div className={`flex flex-col gap-4 text-center w-full md:w-auto mt-4 md:mt-0`}> 
          <span className={`text-base font-semibold text-black`}>
            Active User
          </span>
          <div className={`flex flex-row justify-center`}> 
            <img src={Avatar} className={`w-10 h-10 rounded-full mr-2`} alt={`Avatar`} /> 
            <img src={Avatar} className={`w-10 h-10 rounded-full mr-2`} alt={`Avatar`} /> 
            <img src={Avatar} className={`w-10 h-10 rounded-full`} alt={`Avatar`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;