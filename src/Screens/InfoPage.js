import React from 'react'
import Navbar from '../Components/Navbar'
function InfoPage() {
  return (
    <div>
      <section>
        <Navbar />
        <div className=" my-20">
          <div className='place-content-center'>
            <h1 className=" text-4xl my-8">Desi Words Typing Master</h1>
            
            <div className='my-8'>
              <p className='my-3'>MasteringType: A Stylish Typing Test</p>
              <p className='my-3'> Welcome to MasteringType, a modern and minimal typing test designed with
              precision and powered by React. It's a remake of my earlier project, Quoteleaf, but this time, it's more responsive, uses a different tech stack, and boasts cleaner and more efficient code.</p>
              <p className='my-3'> MasteringType is my journey of skill improvement with React. Join me on this adventure as we embrace elegant design, responsive interfaces, and refined coding practices.</p>
            </div>
            <p className=''>Built by <a href='https://github.com/Aditya2Mathur' className=' text-skin-base underline'>Aditya Mathur</a>.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InfoPage