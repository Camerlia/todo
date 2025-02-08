import { useState } from "react";
import Calendar from "react-calendar";
import Board from "./Block";
import Task from "./Task";
import Block from "./Block";

const TodoForm = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const initialValue = [
    {
      title: "Go for Fishing",
      description: "I need to buy some fishing hook and net.",
      checked: false,
    },
  ];
  const [isDate, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState(initialValue);
  const [inputText, setInputText] = useState("");

  const filteredDetails = details.filter((detail) =>
    detail.title.toLowerCase().includes(inputText.toLowerCase())
  );

  const getDateObject = (date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    dayOfWeek: date.getDay(),
  });

  const date = getDateObject(isDate);

  const addItems = (newTitle, newDescription) => {
    const newItem = {
      title: newTitle,
      description: newDescription,
      checked: false,
    };
    setDetails((prev) => [...prev, newItem]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Input can't be empty");
      return;
    }
    addItems(title, description);
    setTitle(" ");
    setDescription(" ");
  }
  function deleteItem(detailName) {
    setDetails((prevValue) =>
      prevValue.filter((detail) => detail.title !== detailName)
    );
  }

  function completedTask(title) {
    setDetails((prevValue) =>
      prevValue.map((detail) =>
        detail.title === title
          ? {
              ...prevValue,
              title: detail.title,
              description: detail.description,
              checked: !detail.checked,
            }
          : detail
      )
    );
  }

  return (
    <div className="my-6 mx-auto max-w-screen-lg bg-orange-100 p-6 rounded-lg text-start">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div>
            <span className="text-2xl italic font-light text-orange-300">
              {days[date.dayOfWeek]}
            </span>
            <p className="text-3xl font-medium text-black">
              {date.day}/ {date.month}/ {date.year}
            </p>
            <div className="my-4 bg-white rounded-md p-4 text-center">
              <Calendar onChange={setDate} value={isDate} />
            </div>
          </div>
        </div>
        <div className="md:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 items-start"
          >
            <input
              className="px-4 py-2 bg-slate-50 rounded-md w-full md:w-auto"
              placeholder="Type Title of Task"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="px-4 py-2 bg-slate-50 rounded-md w-full md:w-full"
              placeholder="Detail of Task"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="bg-orange-400 rounded-md px-4 py-2 text-2xl">
              +
            </button>
          </form>
          <div className="mt-4 md:mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
            {/* <div className="flex flex-row justify-start items-center gap-4">
      
            </div> */}
            <div className="w-full md:w-auto">
              <input
                className="bg-slate-50 text-black p-3 rounded-sm w-full"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Search by name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {filteredDetails.map((detail) => (
              <Block
                key={detail.title}
                title={detail.title}
                note={detail.description}
                date={isDate}
                isComplete={detail.completed}
                onComplete={completedTask}
                onDelete={deleteItem}
              />
            ))}

          </div>
        </div>
      </div>
      <Task details={details} />
    </div>
  );
};

export default TodoForm;
