import React from 'react'

const MainDetails = ({name,address}) => {
  return (
    <>
        <section className='flex flex-col justify-end items-end'>
            <h2 className='mb-1 font-bold text-3xl uppercase'>{name}</h2>
            <p>{address}</p>
          </section>
    </>
  )
}

export default MainDetails