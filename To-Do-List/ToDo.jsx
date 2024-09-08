import React, { useState } from 'react';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, inputValue]);
      setInputValue('');
    
  };

  const removeItem = (id) => {
    const newItems = items.filter((_, i) => i !== id);
    setItems(newItems);
  };

  return (
    <div className='flex justify-center items-center mt-4'>
      <div className='bg-slate-500 w-1/2 p-8'>
        <h1 className='text-center font-semibold text-white text-4xl'>Todo List</h1>
        <form className='flex gap-3 mt-6 justify-center items-center' onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task..."
            className="bg-[#fff] p-[1rem] w-[20rem] outline-none hover:bg-[#e2e8f0]"
          />
          <button className='bg-black p-4 text-white' type='submit'>Add Item</button>
        </form>
        <div >
          <ul>
            {items.map((item, index) => 
              <li key={index} className='flex items-center justify-between'>
                {item}
                {<button
                  className='ml-2 bg-red-500 text-white p-1 rounded'
                  onClick={() => removeItem(index)}
                >
                  Delete
                </button>}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
