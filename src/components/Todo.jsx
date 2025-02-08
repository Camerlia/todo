/* eslint-disable react/prop-types */


import Greetings from "./Greetings";
import TodoForm from "./TodoForm";

const Todo = ({ name, setName }) => {
  return (
    <div className={`py-5 text-black px-6 text-center`}>
      <Greetings name={name} setName={setName} />
      <TodoForm />
     
    </div>
  );
};

export default Todo;
