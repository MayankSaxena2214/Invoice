import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
        <section className='text-blue-600 bg-blue-100 p-3 rounded-md mt-10 mb-5'>
            <p className='lg:w-1/2 text-justify'>{notes}</p>
        </section>
    </>
  )
}

export default Notes