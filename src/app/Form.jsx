import React from 'react';
import BtnSubmit from './BtnSubmit';

export default function Form() {
  return (
    <form action="" className=" flex flex-col  rounded-2xl  p-10 gap-2 bg-green-100 shadow-2xl">
        <div>
          <div className="flex-col flex gap-1">
            <label htmlFor="" className="font-bold">UserName:</label>
            <input className="border-1 border-gray-400 outline-0 rounded-sm p-1 pl-2 pr-2 " type="text" id="user" placeholder="Username" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-bold">Password:</label>
            <span className="flex justify-center items-center">
            <input className="border-1 border-gray-400 rounded-sm outline-0 p-1 pl-2 pr-2" type="password" id="password" placeholder="Password" />
          </span>
          </div>
        </div>
        <div className="flex justify-center ">
          <button onClick={BtnSubmit} className="flex justify-center items-center bg-green-400 h-8 rounded-2xl p-2 font-bold text-white hover:opacity-75 cursor-pointer">Iniciar Sesion</button>
        </div>
        
      </form>
  )
}
