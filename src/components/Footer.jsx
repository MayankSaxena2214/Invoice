import React from 'react'

const Footer = ({name,email,address,website,phone,bankAccount,bankName}) => {
  return (
    <>
         <footer className='footer border-t-2 border-gray-300 pt-5'>
            <ul className='flex flex-wrap items-center justify-center'>
              <li><span className='font-bold'>Your name</span>{name}</li>
              <li><span className='font-bold'>Your email</span>{email}</li>
              <li><span className='font-bold'>Phone Number</span>{phone}</li>
              <li><span className='font-bold'>Bank</span>{bankName}</li>
              <li><span className='font-bold'>Account Number</span>{bankAccount}</li>
              <li><span className='font-bold'>Account Holder name</span>{name}</li>
              <li><span className='font-bold'>Address:</span>{address}</li>
              <li>
                <span className='font-bold'>Website</span>
                <a href={website} target='_blank'>{website}</a>
              </li>
            </ul>
          </footer>
    </>
  )
}

export default Footer