// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { useDispatch } from 'react-redux'
// import { createArticlee } from '../../store/products'

// const AddArticles = () => {
// const {register, handleSubmit, reset ,formState:{errors},setValue} = useForm()
// const dispatch = useDispatch()
//   return (
//     <>
//     <form onSubmit={handleSubmit((data)=>{
//         // console.log(data);
//         dispatch(createArticlee(data))
//         reset();
//     })}>
//     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
//             <div className="sm:col-span-4">
//               <label htmlFor="productname" className="block text-sm font-medium leading-6 text-gray-900">
//                 Product Name
//               </label>
//               <div className="mt-2">
//                 <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
//                   {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
//                   <input
//                     type="text"
//                     {...register("title", {required:'title is required'})}
//                     id="title"
//                     // autoComplete="username"
//                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     placeholder="enter product name"
//                   />
//                 </div>
//               </div>
//             </div>

    
//             <div className="col-span-4">
//               <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
//                 Description
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="Description"
//                   {...register("Description", {required:'Description is required'})}
//                   rows={3}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your Articles</p>
//             </div>
       
            
//           </div>
//           <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Add Article
//         </button>
//         </form>
//     </>
//   )
// }

// export default AddArticles
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createArticlee } from '../../store/products';
import AdminNavbar from './adminNavbar';
import WritersThought from '../../pages/WritersThought';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

const AddArticles = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
    // const location = useLocation()
    // console.log(location.pathname);
  const onSubmit = (data) => {
    dispatch(createArticlee(data));
    reset();
  };
  const navigate = useNavigate()
  // useEffect(()=>{
  //   navigate('/admin-setup')
  // })
  return (
    <>
    {/* <AdminNavbar/> */}
    <div className="mx-auto mt-10 max-w-4xl p-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
          <div className="col-span-2">
            <label htmlFor="title" className="block text-lg font-medium leading-5 text-gray-900">
              Product Name
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <input
                type="text"
                {...register("title", { required: 'Title is required' })}
                id="title"
                className="block w-full pl-3 pr-12 py-3 sm:text-sm sm:leading-5 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                placeholder="Enter product name"
                style={{border:"1px solid gray"}}
              />
            </div>
          </div>

          <div className="col-span-2">
            <label htmlFor="Description" className="block text-lg font-medium leading-5 text-gray-900">
              Description
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <textarea
                id="Description"
                {...register("Description", { required: 'Description is required' })}
                rows={3}
                className="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                style={{border:"1px solid gray"}}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your Articles</p>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Add Article
          </button>
        </div>
      </form>
    </div>
    <Typography variant='h3' className='w-3/5 mx-auto'>All Products Scroll to see</Typography>
    <WritersThought/>
    </>
  );
};

export default AddArticles;
