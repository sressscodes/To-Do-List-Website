import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Form = ({ title, description, setTitle, setDescription, submitHandler }) => {

  const formRef = useRef()

  useGSAP(()=>{
    gsap.from(formRef.current,{
      opacity:0,
      y:40,
      delay:0.6,
      duration:0.5,
    })
  })

  return (
    <form ref={formRef} className='bg-slate-200 w-2/4 mx-auto py-10 flex justify-center mt-0 mb-20 rounded-lg shadow-lg' onSubmit={submitHandler}>
      <input 
      type='text' 
      placeholder='Enter task title' 
      className='border-slate-300 border-2 rounded-lg px-4 py-1 mx-2' 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input 
      type='text' 
      placeholder='Enter task description' 
      className='border-slate-300 border-2 rounded-md px-4 py-1 mx-2' 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button
      className= 'rounded-md px-4 py-2 mx-2 bg-slate-600 text-white font-semibold'> 
        Add Task
      </button>
    </form>
  )
}

export default Form