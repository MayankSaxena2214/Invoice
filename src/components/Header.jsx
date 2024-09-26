import React from 'react'

const Header = () => {
    const handlePrint=()=>{
        window.print();
      }
  return (
    <>
          
         <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide uppercase
              mb-3'>Invoicer</h1>
            </div>
            {/* <div >
              <ul className='flex justify-between flex-wrap items-center'>
                <li className='mx-2'>
                  <button className=' bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300' onClick={handlePrint}>Print</button>
                </li>
                <li className='mx-2'>
                  <button className=' bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Download</button>
                </li>
                <li className='mx-2'>
                  <button className=' bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300'>Send</button>
                </li>
              </ul>
            </div> */}
          </header> 
    </>
  )
}

export default Header