import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center border'>
    <div className="w-[600px]">
                <div className=" modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><Link to="/">✕  </Link></button>
                    
                    <h3 className="font-bold ">Signup</h3>
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                        {...register("name", { required: true })} />
                        <br />
                        {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                        {...register("email", { required: true })} />
                        <br />
                        
                        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span>Password</span>
                        <br />
                        <input type="password" placeholder="enter your password" className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' 
                        {...register("password", { required: true })} />
                        <br />
                        
                        {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
                        <p className='text-xl'>have an account? <a className="underline text-blue-600 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()
                            }
                            >
                                Login
                                </a>
                                <Login/>
                                </p>
                    </div>
                    </form>
                </div>
            </div>
    </div>
    </>
  )
}

export default Signup