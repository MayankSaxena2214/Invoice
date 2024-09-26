import React from 'react'

const Tables = ({list,total}) => {
  return (
    <>
        {list && list.length>0 && <table width="100%">
          <thead className='bg-gray-100'>
            <tr>
              <td className='font-bold'>Items Description</td>
              <td className='font-bold'>Quantity</td>
              <td className='font-bold'>Price</td>
              <td className='font-bold'>Amount</td>
            </tr>
          </thead>
          <tbody>
            {
              list && list.map((element)=><tr key={element.id}>
                <td>{element.description}</td>
                <td>{element.quantity}</td>
                <td>{element.price}</td>
                <td>{element.amount}</td>
              </tr>)
            }
          </tbody>
        </table>}
        {
          list&&list.length>0&&<div className='mt-2 flex justify-end items-center'>
          <h2 className='mb-4 text-gray-800 text-2xl font-bold'>Total INR: {total.toLocaleString()}</h2>
        </div>
        }
    </>
  )
}

export default Tables