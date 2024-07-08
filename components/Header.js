import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {

  const ref = useRef()

  useGSAP(()=>{
    gsap.from(ref.current,{
      opacity:0,
      y:20,
      duration:0.5,
    })
  })

  return (
    <h1 ref={ref} className='text-slate-700 py-20 font-bold text-4xl text-center'>My To-Do-List ✅</h1>
  )
}

export default Header