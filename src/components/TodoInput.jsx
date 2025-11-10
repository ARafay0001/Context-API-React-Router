import React from 'react'

const TodoInput = () => {
  return (
    <div className="mx-auto w-max flex ">
      <input className="text-2xl bg-green-100 p-3 h-14 rounded-l-2xl"  type="text" name="" id="" placeholder='Enter the task todo' />
      <button className="bg-green-400 h-14 p-3 text-white rounded-r-2xl hover:bg-green-600 active:bg-green-700 active:scale-95 transition-all duration-200 ease-in-out cursor-pointer">Add</button>
    </div>
  )
}

export default TodoInput
