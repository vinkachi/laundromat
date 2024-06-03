import React, { useState } from 'react'
import { machine_washingclosed } from '../assets/images'
import { IoEyeOffOutline, IoEyeOutline, IoKeyOutline, IoPersonOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { BsPersonCircle, BsPersonSquare } from 'react-icons/bs'
import { TbMailForward } from 'react-icons/tb'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdLockOpen } from 'react-icons/md'

export default function Account() {
const [email, setEmail]= useState("")
const [password, setPassword]= useState("vincent")

const[showPassword, setShowPassword]= useState(false)
const[showLogin, setShowLogin]= useState(true)

const [input, setInput]= useState({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const handleChange = e => {
  setInput(prev => ({...prev, [e.target.name] : e.target.value}))
}

console.log(email, password);


  return (
    <main className="flex flex-col relative py-20 px-4">
      <img src={machine_washingclosed} alt="machine washingclosed" className="absolute top-0 left-0 h-fullw w-full md:w-1/2 object-cover object-center" />
      <div className="container mx-auto flex relative justify-center md:justify-end">
        {
          showLogin ?
          <form action="" className="bg-white p-4 shad md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md">
          <h3 data-aos="fade-up" data-aos-duration="1000" className="text-primary text-lg md:text-xl text-center font-bold">Get Exclusive Access</h3>
          <div  data-aos="fade-right" data-aos-delay="2000" className="flex items-center gap-1 border-b border-dark/20"><IoPersonOutline />
            <input type="text" value={input} onChange={e => setEmail(e.target.value)}  required placeholder='Email'className='flex-1 outline-none ' />
          </div>
          <div  data-aos="fade-left" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20">
          <IoKeyOutline />
            <input  data-aos="fade-down" data-aos-delay="1000" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required placeholder='******' minLength={6} className='flex-1 outline-none'/>
            
            <span onClick={() => setShowPassword(!showPassword)} className="relative cursor-pointer p-1">
              {
                showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>
              }
            </span>
          </div>
          <button  data-aos="fade-up" data-aos-delay="2000" type='submit' className='py-1 md:py-1.5 px-6 md:px-8 relative bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max'>Account</button>
          <p onClick={() => setShowLogin(!showLogin)} className="cursor-pointer p-1 text-center tex-dar/60 underline">Dont Have an account signUp</p>
        </form>
        :
        <form action="" className="bg-white p-4 shad md:shadow-none flex flex-col rounded-md gap-4 w-full max-w-md">
          <h3 data-aos="fade-up" data-aos-duration="1000" className="text-primary text-lg md:text-xl text-center font-bold">Enjoy <span className="text secondary"> Incredible Offers</span>  When You Sign Up</h3>
          <div  data-aos="fade-right" data-aos-delay="2000" className="flex items-center gap-1 border-b border-dark/20"><IoPersonCircleOutline />
            <input type="text" value={input.firstName} name='firstName' onChange={handleChange} required placeholder='First Name e.g. Vincent'className='flex-1 outline-none ' />
          </div>
          <div  data-aos="fade-right" data-aos-delay="2000" className="flex items-center gap-1 border-b border-dark/20"><BsPersonSquare />
            <input type="text" value={input.lastName} name='lastName' onChange={handleChange} required placeholder='Last Name e.g. Duncan'className='flex-1 outline-none ' />
          </div>
          <div  data-aos="fade-right" data-aos-delay="2000" className="flex items-center gap-1 border-b border-dark/20"><TbMailForward />
            <input type="email" value={input.email} name='email' onChange={handleChange} required placeholder='Email@mail'className='flex-1 outline-none ' />
          </div>
          <div  data-aos="fade-left" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20">
          <RiLockPasswordLine />
            <input  data-aos="fade-down" data-aos-delay="1000" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required placeholder='******' minLength={6} className='flex-1 outline-none'/>
            
            <span onClick={() => setShowPassword(!showPassword)} className="relative cursor-pointer p-1">
              {
                showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>
              }
            </span>
          </div>
          <div  data-aos="fade-left" data-aos-delay="1500" className="flex items-center gap-1 border-b border-dark/20">
          <MdLockOpen />
            <input  data-aos="fade-down" data-aos-delay="1000" type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required placeholder='******' minLength={6} className='flex-1 outline-none'/>
            
            <span onClick={() => setShowPassword(!showPassword)} className="relative cursor-pointer p-1">
              {
                showPassword ? <IoEyeOffOutline/> : <IoEyeOutline/>
              }
            </span>
          </div>
          <button  data-aos="fade-up" data-aos-delay="2000" type='submit' className='py-1 md:py-1.5 px-6 md:px-8 relative bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary rounded-md w-max'>Creat Account</button>
          <p onClick={() => setShowLogin(!showLogin)} className="cursor-pointer p-1 text-center tex-dar/60 underline">Already a member Login</p>
        </form>
        }
      </div>
    </main>
  )
}
