import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ListItems from "../components/ListItems";
function UserInput() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div className=" flex items-center justify-center mt-[2rem]  ">
      <div className="bg-[purple] p-[2rem] rounded-[0.5rem] w-[40rem] ">
        <h1 className=" text-[#fff] text-[2rem] font-semibold mb-[1rem] text-center ">
          Todo List
        </h1>
        <div className="flex gap-[4rem] items-center ">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task..."
            className="bg-[#fff] p-[1rem] w-[20rem] rounded-[2rem] outline-none hover:bg-[#e2e8f0] "
          />

          <FontAwesomeIcon
            icon={faPlus}
            className="text-[2rem]  bg-[#fff] rounded-[1.5rem] px-[1rem] py-[0.5rem] cursor-pointer "
            onClick={addItem}
          />
        </div>

        <div>
          <ListItems items={items} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}
export default UserInput;
