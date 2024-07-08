import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TaskList = ({mainTask,deleteHandler}) => {

  let renderTask;

  if (mainTask.length>0) {
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between my-5'>
          <div className='flex items-center justify-between w-2/5'>
            <h2 className='text-2xl font-medium'>{t.title}</h2>
            <h4 className='text-lg'>{t.description}</h4>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }}
          className='bg-red-700 text-white px-4 py-2 rounded-md font-medium'>Delete</button>
        </li>

      )
    })
  } else {renderTask = <h1 className='text-center text-lg'>Add some task and be more Productive!</h1>}
  
  const TaskRef = useRef()

  useGSAP(()=>{
    gsap.from(TaskRef.current,{
      opacity:0,
      y:20,
      duration:0.5,
      delay:1.3
    })
  })

  return (
    <>
      <div ref={TaskRef} className='px-8 py-4 m-auto bg-slate-200 rounded-md w-2/3 shadow-lg'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default TaskList