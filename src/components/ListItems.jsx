import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListItems = ({ items, removeItem }) => {
  return (
    <div>
      <ul className=" mt-[2rem] flex flex-col gap-[1.5rem]">
        {items.map((item, index) => (
          <div className="flex items-center gap-[3rem]">
            <li
              key={index}
              className="bg-[#fff] rounded-[1.5rem] p-[0.8rem] w-[25rem]"
            >
              {item}
            </li>
            <FontAwesomeIcon
              icon={faTrash}
              className="text-[1.5rem] bg-[#fff] rounded-[50%] p-[0.7rem] cursor-pointer"
              onClick={() => removeItem(index)}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ListItems;

