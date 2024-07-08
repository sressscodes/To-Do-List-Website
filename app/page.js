"use client"
import Form from '@/components/Form'
import Header from '@/components/Header'
import TaskList from '@/components/TaskList'
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault()
    setTitle("")
    setDescription("") 
    setMainTask([...mainTask, { title, description }])
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
    let copy = [...mainTask]
    copy.splice(i,1)
    setMainTask(copy)
  }

  return (
    <>
      <div id='hehe' className='bg-cover bg-center min-h-screen bg-opacity-30 bg-[url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTMtcC0wMDI0Yy0wMS1rc2k4YjU2Yi5qcGc.jpg)] bg-sky-200 bg-blend-multiply'>
        <Header />
        <Form 
          title={title} 
          description={description} 
          setTitle={setTitle} 
          setDescription={setDescription} 
          submitHandler={submitHandler} 
        />
        <TaskList 
          mainTask={mainTask}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  )
}

export default page