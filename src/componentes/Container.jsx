import React from 'react'

export const Container = () => {
    return (
        <div class="bg-gradient-to-t from-purple-500 to-purple-700 h-screen">
            <div class="flex justify-center pt-8 ">
                <div class="backdrop-blur-lg backdrop-filter bg-white bg-opacity-30 
                            p-4 w-1/3 rounded-lg shadow-lg ">
                    <h1 className='text-center text-xl font-bold  '>To do List</h1>
                    <span className='flex justify-center'>
                        <input type="text"  className='border-2 rounded-lg h-9 m-2'/>
                        <button class="rounded-lg bg-purple-700 p-2">Add</button>
                    </span>
                </div>
            </div>
            
       </div>

    )
  }